import { Link } from "react-router-dom"


import "../Styles/Hero.css"

const Hero = () => {
  return (
    <section  className="relative max-w-full overrflow-x-hidden">


    <div className="slider_bg1  items-center justify-center  relative  flex flex-col text-center ">
      <div  className=" w-[100%] flex flex-col items-center justify-center">
         
           <h1  className="md:w-[600px] font-tekmont uppercase text-[45px] line-[10px] text-[#ffffff] ">Safe and Efficient Oil   and Gas Solutions</h1>
           <p className="text-[15px] text-[#ffffff] pb-3">Your trusted partner for all your oil and gas needs</p>
              <Link to="#" className="md:w-[200px] w-[100%]-[35px] py-[10px] bg-priGreen font-int text-[#ffffff] text-[16px] font-tekfont flex items-center justify-center">Know what we do</Link>
             </div>

          </div>
    
    
    
    
    
      </section>
  )
}

export default Hero