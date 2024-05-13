import {  Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Abouts from "../Pages/Abouts"
import Services from "../Pages/Services"
import Products from "../Pages/Products"


const Routs = () => {
  return (
<>
<Routes>
<Route path="/"   element={<Home  />}   />
    <Route path="/about"  element={<Abouts />}   />
    <Route path="/services"  element={<Services  />}   />
    <Route path="/products"  element={<Products  />}   />
    
    
    </Routes>
    
    
    </>
  )
}

export default Routs