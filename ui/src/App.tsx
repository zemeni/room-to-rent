import {useEffect, useState} from "react";
import axios, {AxiosError, CanceledError} from "axios";
interface Employee {
    id: number;
    name: string;
    role: string;
}
const App = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    const url1 = 'https://jsonplaceholder.typicode.com/users';
    const url2 = 'http://localhost:8080/employees';

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        const fetchCustomer = async () => {
            try {
                const res = await axios.get<Employee[]>(url1, {signal: controller.signal})
                console.log(res.data);
                setEmployees(res.data);
                setLoading(false);
            } catch (err) {
                if (err instanceof CanceledError) return;
                setError((err as AxiosError).message);
                setLoading(false);
            }
        }
        fetchCustomer();
        return () => {
            controller.abort();
        };
    }, []);
    return (
        <>
            {error && <p>No data</p>}
            { isLoading && <div className="spinner-border"></div>}
            <ul>
                {employees.map(e => <li key={e.id}>{e.name}</li>
                )}
            </ul>
        </>
    );
};

export default App;