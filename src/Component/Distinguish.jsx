import { Link } from "react-router-dom"
import about from "../assets/Pics/man_left.png"

const Distinguish = () => {
  return (
    <section  className="mt-[4rem] mb-[2rem]" 
    data-aos="fade-right" 
   >

    <div  className="flex md:p-4 p-2 md:flex-row flex-col justify-center  md:gap-[5rem] gap-[3rem]  mx-0  md:mt-7   h-[500px">

        
        {/* FIRST BOX */}
    
        <div  className="  h-[350px]  md:w-[450px] w-[100%]">
              <img src={about} alt="about_company_pics"  className="h-[100%] w-[100%]"/>
          </div>

        

{/* SECOND  BOX */}
        <div  className="w-[100%] md:w-[550px] justify-around">
            {/* HEADING */}

            <div  className="md:w-300px w-[100%]">
           
  <h1  className="text-[55px] font-tekfont #08172E">BUIC Distinguishes Itself Through Its:</h1>
<div  className="w-[50px]  h-[2px] bg-secGreen"></div>

<p className="text-[#77C83] pt-2 pb-2">Unmatched experience of [Number] years in the industry.</p>


<p className="text-[#77C83] pt-2 pb-2">Commitment to utilizing cutting-edge technology and innovation.</p>

    
<p className="text-[#77C83] pt-2 pb-2">Unwavering dedication to client satisfaction and building long-term partnerships.</p>


<button className="pb-7"><Link to="#" className="px-3 py-3 bg-secGreen text-[#ffffff] text-[18px] font-tekfont flex items-center text-center justify-center">Contact Us</Link></button>

            </div>

        </div>




    </div>

  </section>
  )
}

export default Distinguish