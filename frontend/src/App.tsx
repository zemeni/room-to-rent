import {useEffect, useState} from 'react'
import './App.css'
import {default as axios} from "axios";
import {AxiosResponse} from "axios";

function App() {
  const [welcome, setWelcome] = useState("");

    useEffect(() => {
        const welcomeUrl = "http://13.55.102.73:8080/room-to-rent/welcome"
        axios.get(welcomeUrl).then(function (response: AxiosResponse) {
            setWelcome(response.data);
            console.count(response.data);
        })
    }, []);

  return (
    <>
      <h1>{welcome}</h1>
    </>
  )
}

export default App
