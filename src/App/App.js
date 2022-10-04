import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import useContextAPI from "../contexts/useContext.js";
import LoginScreen from "../components/authentication/loginScreen";
import RegistrationScreen from "../components/authentication/registrationScreen";
import "../assets/style/reset.css"
import HomeScreen from "../components/home/homeScreen.js";

function App() {
  const [token, setToken] = useState("")
  const [dataUser, setDataUser] = useState({
    id: "",
    name: "",
    profile_url: "",
  })
  console.log(dataUser)

  return (
    <useContextAPI.Provider value={{ token, setToken, dataUser, setDataUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signin" element={<LoginScreen />} />
          <Route path="/signup" element={<RegistrationScreen />} />
        </Routes>
      </BrowserRouter>
    </useContextAPI.Provider>
  )
}

export default App;
