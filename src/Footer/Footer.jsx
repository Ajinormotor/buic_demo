import { NavLink } from "react-router-dom"
import logo from "../assets/Pics/buic logo.png"
import "../Footer/Footer.css"


const Footer = () => {
  return (
    <section  className="footer" id="footer">
    <div className="footer__wrapper  grid-cols-1 md:grid-cols-2  grid lg:grid-cols-4 ">
  
  
      <div className="footer__logo">
      <div  className="flex gap-3  items-center">
            <img src={logo}  alt="logo_pics"   className="w-[50px] h-[50px]" />
            <h1  className="text-[#fcfcfc] text-[10px]"> BUIC Industrial <br  />Services LTD</h1>
        </div>
        <p  className="font-semibold  italic">
        Safe and Efficient Oil <br />
 and Gas Solutions 
        </p>

        <p className="pb-3">Your trusted partner for <br /> all your oil and gas needs</p>

        <button className="btn bg-priGreen rounded-[10px] py-[0.5rem] px-[0.8rem] ">Know what we do</button>
  
        <ul>
          <li><NavLink  to="#"></NavLink></li>
        
        </ul>
      </div>
  
      <div className="footer__box">
        <h2>Useful Links</h2>
     
        <ul className="footer__menu">
          <li><NavLink  to="#"><i className="ri-arrow-right-fill"></i> Home</NavLink></li>
          <li><NavLink  to="#"><i className="ri-arrow-right-fill"></i> About Us</NavLink></li>
          <li><NavLink  to="#"><i className="ri-arrow-right-fill"></i> Services</NavLink></li>
          <li><NavLink  to="#"><i className="ri-arrow-right-fill"></i> Products</NavLink></li>
   
        </ul>
      
      </div>
  
      <div className="footer__box">
        <h2>Our Services</h2>
        <ul  className="footer__menu">
        
          <li><NavLink  to="#"><i className="ri-arrow-right-fill"></i> Crude Oil</NavLink></li>
          <li><NavLink  to="#"><i className="ri-arrow-right-fill"></i> Refined Products</NavLink></li>
          <li><NavLink  to="#"><i className="ri-arrow-right-fill"></i> Logistics</NavLink></li>
          <li><NavLink  to="#"><i className="ri-arrow-right-fill"></i>Hedging</NavLink></li>
      
        </ul>
        
      </div>
  
      <div className="footer__box">
        <h2>Contact Us</h2>
      
        <ul className="footer__menu">
          <li><i className="ri-gps-fill"></i> A108 Adam Street <br  /> New York, NY 535022 <br /> United States</li>
          <li><NavLink  to="#"><i className="ri-phone-line"></i> +1 5589 55488 55</NavLink></li>
          <li><NavLink  to="#"><i className="ri-mail-line"></i>  info@example.com</NavLink></li>
          
        </ul>
       
      </div>
  
  
    </div>
  
  <hr className="mt-2  md:mb-6"/>
    <p className="mb-0  max-w-[100%] h-[10vh] bg-[#050D00] justify-center  items-center flex-wrap flex text-center"><i className="ri-copyright-line"></i> Copyrights <bold>Buic Industrial Services LTD.</bold> All Rights Reserved Buic </p>
  </section>
  )
}

export default Footer