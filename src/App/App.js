import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import useContextAPI from "../contexts/useContext.js";
import LoginScreen from "../components/authentication/loginScreen.js";
import RegistrationScreen from "../components/authentication/registrationScreen.js";
import HomeScreen from "../components/home/homeScreen.js";
import ShoppingCartScreen from "../components/shoppingCart/shoppingCartScreen.js";
import "../assets/style/reset.css"

export default function App() {
  const [token, setToken] = useState("")
  const [categories, setCategories] = useState()
  const [shoppingCart, setShoppingCart] = useState()
  const [finalizePurchase, setFinalizePurchase] = useState(false)
  const [dataUser, setDataUser] = useState({
    id: "",
    name: "",
    profile_url: "",
  })

  return (
    <useContextAPI.Provider value={{ token, setToken, dataUser, setDataUser, categories, setCategories, finalizePurchase, setFinalizePurchase }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/shopping-cart" element={<ShoppingCartScreen />} />
          <Route path="/signin" element={<LoginScreen />} />
          <Route path="/signup" element={<RegistrationScreen />} />
        </Routes>
      </BrowserRouter>
    </useContextAPI.Provider>
  )
}
