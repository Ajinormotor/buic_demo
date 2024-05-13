import client1 from "../assets/Pics/Ellipse 1 (1).png"
import client2 from "../assets/Pics/Ellipse 1 (2).png"
import client3 from "../assets/Pics/Ellipse 1 (3).png"


const Client = () => {
  return (
    <section className="overflow-x-hidden mt-[4rem] mb-[2rem] bg-[#B0C8B2]" 
    data-aos="zoom-in" 
   >

        <h1 className="text-center font-bold pb-[6rem] pt-[2rem] text-[25px] text-[#002E05]">What Our Clients Are Saying</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[100%] md:gap-[0%] gap-24  md:mx-[1rem] mx-1 p-4 pb-[3rem]">

        <div  className="w-[95%] h-[50vh] flex flex-col items-center justify-center text-center shadow-md bg-[#E6EDE6] rounded-[15px]">
          

            <img src={client3}  alt="objective_pics"  className="w-[150px] h-[150px]  absolute mt-[-19rem]" />

            <h1 className="font-bold md:pt-[3rem] pt-[4rem] text-[#002E05]">Sarah Jones, Project Manager,<br /> GreenTech Energy Solutions</h1>
            <p  className="pt-[1rem] p-2"> &quot;We partnered with BUIC for the development of our offshore wind farm project in the North Sea. Their expertise in marine operations and vessel management was
             invaluable. They provided safe, efficient transportation and support for our crew ”</p>

        </div>

        <div  className="w-[95%] h-[55vh] md:h-[50vh] flex flex-col items-center text-center bg-[#E6EDE6] justify-center shadow-md rounded-[15px] ">
            <img src={client2}  alt="objective_pics"  className="w-[150px] h-[150px] absolute mt-[-19rem]" />

            <h1 className="font-bold md:pt-[5rem] pt-[6rem] text-[#002E05]">Mary Miller, CEO, Miller <br /> Drilling & Exploration</h1>
            <p className="pt-[1rem] p-2"> &quot;BUIC has been a trusted partner for our onshore drilling operations
             for several years.  Their procurement specialists consistently source high-quality drilling equipment and supplies at competitive prices. We appreciate their responsiveness and ability to meet tight deadlines”</p>

        </div>

        <div  className="w-[95%] h-[50vh] bg-[#E6EDE6]  rounded-[15px] flex flex-col items-center justify-center text-center  shadow-md">

        <img src={client1}  alt="objective_pics"  className="w-[150px] h-[150px]  absolute mt-[-19rem]" />
      

            <h1 className="font-bold pt-[5rem] text-[#002E05]">Omar Khan, Director of Operations,<br /> Global Trans Ltd</h1>
            <p className="pt-[1rem] p-2"> &quot;We recently collaborated with BUIC on a large-scale oil pipeline project in the Middle East.  Their comprehensive logistics expertise was crucial in ensuring the timely and
             cost-effective delivery of essential materials and equipment to remote locations. “</p>

        </div>

    </div>
 </section>
  )
}

export default Client