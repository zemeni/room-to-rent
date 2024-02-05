import { useEffect, useState } from "react";
import { default as axios } from "axios";
import { AxiosResponse } from "axios";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PublicLayout from "./layouts/public/PublicLayout";
import { Routes, Route } from "react-router-dom";
function App() {
  const [welcome, setWelcome] = useState("");
  const [users, setUsers] = useState([]);

  const token: string =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDY5ODQyNDIsImV4cCI6MTcwNzA3MDY0Mn0.KsoWH-JL6Pj-ZcMqqXYZOyKYF4kdTL3b5TDvAiAnXEU";

  useEffect(() => {
    const welcomeUrl = "http://localhost:8080/room-to-rent/welcome";
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.get(welcomeUrl, config).then(function (response: AxiosResponse) {
      setWelcome(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    const usersUrl = "http://localhost:8080/room-to-rent/developers";
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.get(usersUrl, config).then(function (response: AxiosResponse) {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      {/* <h1>{welcome}</h1>
      <div>
        <h5>list of users</h5>
        {users.map((user, index) => (
          <li key={index}>{user.firstName + " " + user.lastName}</li>
        ))}
      </div> */}
      <PublicLayout />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
