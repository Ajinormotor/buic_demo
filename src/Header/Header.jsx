import { NavLink } from "react-router-dom"
import logo from "../assets/Pics/buic logo.png"
import { useEffect, useRef, useState } from "react"

import "../Header/Header.css"


const nav_link = [
    {
      path:'/buic_demo',
      display: 'Home'
    },
  

    {
      path:'/services',
      display: 'Services'
    },

    {
        path:'/products',
        display: 'Products'
      },
    
  
    // {
    //   path:'/contact',
    //   display: 'Contact'
    // },
  ]

 


const Header = () => {

    

   const headerRef = useRef(null)
useEffect( ()=> {
    
       const handleScroll= () => {
      
           if(document.documentElement.scrollTop > 80 || document.body.scrollTop  > 80) {
    
            headerRef.current.classList.add("header__shrink");
         }  else {
            headerRef.current.classList.remove("header__shrink");
          }
   };
    
       window.addEventListener('scroll', handleScroll);
    
    
       return() => {
         window.removeEventListener('scroll', handleScroll);
      };
    
     },[])
    

    const [click, setClick] = useState(false)

const handleClick = ()=> {
  setClick(!click)
}



  return (
<section className="bg-secGreen overflow-x-hidden overflow-y-hidden max-w-full   h-[11vh]" ref={headerRef}>
    <div  className="flex justify-between items-center px-3 md:py-3 pt-[0.5rem] ">

        {/* LOGO */}
        <div  className="flex gap-3  items-center">
            <img src={logo}  alt="logo_pics"   className="w-[50px] h-[50px]" />
            <h1  className="text-[#fcfcfc] text-[13px]"> BUIC Industrial <br  />Services LTD</h1>
        </div>

        <div  className="flex justify-between items-center w-[50%]  md:w-[60%] gap-4">

        <div  className=" relative">
<ul  className={click?  ("navigate md:block flex gap-4 bg-priGreen "):("navigation md:flex hidden gap-3") } >
  {
    nav_link.map((item , index)=>(
      <li  className="navigate_item flex  w-[100%] gap-4 text-[16px] hover:scale-x-[15px]  uppercase text-mainGreen  md:text-white" key={index} >
        <NavLink to={item.path}  className=" gap-4 font-tekmont text-[20px] text-white font-[600]">{item.display}</NavLink></li>
    ))
  }
</ul>

      </div>

      <div  className="hidden md:flex">
      <button className="btn bg-priGreen rounded-[10px] py-[0.7rem] px-[1.7rem] font-inter  text-[#fcfcfc]">Contact us</button>
      </div>



        </div>

   
      <div onClick={handleClick}  className=" flex md:hidden text-white text-[26px] font-[700]
       shadow cursor-pointer">
  {click? <i className="ri-close-line"></i> : <i className="ri-menu-2-line"></i>}


</div>

    </div>
</section>
  )
}

export default Header