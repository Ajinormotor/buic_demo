import { Link } from "react-router-dom"
import about from "../assets/Pics/man_right.png"

const Aboutus = () => {
  return (
    <section  
    data-aos="zoom-in-left" 
   >

    <div  className="flex md:p-4 p-2 md:flex-row flex-col justify-around  md:gap-[5rem] gap-[3rem]  mx-0  md:mt-7   h-[500px">
        

{/* FIRST BOX */}
        <div  className="w-[100%] md:w-[550px] justify-around">
            {/* HEADING */}

            <div  className="md:w-300px w-[100%]">
         
  <h1  className="text-[35px]  md:text-[55px] font-tekfont #08172E">ABOUT COMPANY</h1>
<div  className="w-[50px]  h-[2px] bg-secGreen"></div>

<p className="text-[#77C83] pt-2 pb-2">BUIC is a leading provider of comprehensive oil and gas services across the entire value chain.  We operate with a global presence, 
  delivering innovative solutions to meet the worlds energy demands. TTOIL Trading and Commerce Agency trades several of crude 
  oil and refined petroleum products in global energy market.
</p>

<p className="pb-2">
BUIC operates in UAE, Turkey, Azerbaijan, Russia, Ukraine, Georgia, Kazakhstan,
 Turkmenistan and other CIS and Central Asian Countries.</p>

<button className="pb-7"><Link to="#" className="px-3 py-3 bg-secGreen text-[#ffffff] text-[18px] font-tekfont flex items-center text-center justify-center">Contact Us</Link></button>

            </div>

        </div>

        {/* SECOND BOX */}
    
          <div  className="  h-[350px]  md:w-[450px] w-[100%]">
              <img src={about} alt="about_company_pics"  className="h-[100%] w-[100%]"/>
          </div>




    </div>

  </section>
  )
}

export default Aboutus