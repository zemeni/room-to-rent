import {useEffect, useState} from 'react'
import './App.css'
import {default as axios} from "axios";
import {AxiosResponse} from "axios";

function App() {
  const [welcome, setWelcome] = useState("");
  const [users, setUsers] = useState([]);

  const token:String = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDY5ODQyNDIsImV4cCI6MTcwNzA3MDY0Mn0.KsoWH-JL6Pj-ZcMqqXYZOyKYF4kdTL3b5TDvAiAnXEU";

    useEffect(() => {
        const welcomeUrl = "http://localhost:8080/room-to-rent/welcome";
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get(welcomeUrl, config).then(function (response: AxiosResponse) {
            setWelcome(response.data);
            console.log(response.data);
        })
    }, []);

    useEffect(() => {
        const usersUrl = "http://localhost:8080/room-to-rent/developers";
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get(usersUrl, config).then(function (response: AxiosResponse) {
            setUsers(response.data);
            console.log(response.data);
        })
    }, []);


  return (
    <>
      <h1>{welcome}</h1>
      <div>
          <h5>list of users</h5>
          {users.map((user, index) => (
              <li key={index}>{user.firstName + " "+ user.lastName}</li>
          ))}
      </div>
    </>
  )
}

export default App
