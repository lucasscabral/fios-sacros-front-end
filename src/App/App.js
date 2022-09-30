import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import useContextAPI from "../contexts/useContext.js";
import LoginScreen from "../components/authentication/loginScreen";
import RegistrationScreen from "../components/authentication/registrationScreen";
import "../assets/style/reset.css"

function App() {
  return (
    <useContextAPI.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/signup" element={<RegistrationScreen />} />
        </Routes>
      </BrowserRouter>
    </useContextAPI.Provider>
  )
}

export default App;
