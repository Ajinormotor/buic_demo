 import  marine from "../assets/Pics/Frame 50.png"
 import dredging from "../assets/Pics/AdobeStock_327044012_Preview.png"
 import vessel from "../assets/Pics/Frame 42 (2).png"
 import procurement from "../assets/Pics/Frame 42.png"
 import logistics from "../assets/Pics/Frame 42 (1).png"
 import drilling from "../assets/Pics/Frame 42 (3).png"

const Services = () => {
  return (
<section className="overflow-x-hidden">

  {/* SERVICES HEADING */}
<div  className="services_bg1  flex flex-col">

<div  className="flex  pt-[5rem]  text-center items-center justify-center">
    
<h2  className="md:text-[68px] font-tekfont uppercase text-[45px] line-[10px] flex items-center justify-center gap-3 text-[#ffffff] "> Our Services</h2>
</div>

</div>


{/* MARINE BOX */}
<div className="flex md:flex-row flex-col justify-around  w-[100%]  relative p-2 mt-[4rem]">
  <div  className="flex flex-col w-[100%] md:w-[500px]">
    <h1 className="text-green-400 pb-2">MARINE</h1>

    <p className="pt-2">Highly trained crew members operate the vessels,
     ensuring safe navigation through various weather conditions and adherence to maritime regulations</p>

    <p className="pt-2">Regular maintenance is performed to keep vessels in optimal
     operating condition, minimizing downtime and potential safety hazards.</p>

    <p className="pt-2">Strict safety protocols are implemented, including emergency response procedures and crew safety training,
     to prioritize the safety of personnel and the environment.</p>

    <p className="pt-2">Advanced navigation systems are utilized to ensure precise positioning 
    and efficient travel routes for vessels.</p>

    <p className="pt-2">Communication systems allow for constant communication between vessels,
     shore operations, and other relevant parties.</p>



  </div>

  <div>
<img src={marine} alt="marine_pics"  className="md:w-[400px] w-[100%]  h-[400px]" />
  </div>

</div>

{/* DREDGING BOX */}
<div className="flex md:flex-row flex-col justify-around  w-[100%]  relative p-2 mt-[4rem]">

<div>
<img src={dredging} alt="marine_pics"  className="md:w-[400px] w-[100%]  h-[400px]" />
  </div>

  <div  className="flex flex-col w-[100%] md:w-[500px]">
    <h1 className="text-green-400 pb-2">DREDGING</h1>

    <p className="pt-2">Specialized dredging equipment is used, such as suction dredgers or cutter suction dredgers,
     to remove underwater sediment and rock with precision</p>

    <p className="pt-2">Offshore drilling: Employs specialized drilling rigs and platforms designed to operate in open water.  
    Jack-up rigs stand on the seabed for drilling, while semi-submersible rigs float and are anchored in position.</p>

    <p className="pt-2">Directional drilling: Advanced drilling techniques allow for precise wellbore placement,
     even if the target oil or gas reserves are not directly below the rig.</p>

    <p className="pt-2">Safety protocols are paramount during drilling operations to prevent blowouts and ensure worker safety. 
    This includes well control procedures and blowout prevention equipment.</p>

  </div>

</div>

{/* VESSEL BOX */}
<div className="flex md:flex-row flex-col justify-around  w-[100%]  relative p-2 mt-[4rem]">
  <div  className="flex flex-col w-[100%] md:w-[500px]">
    <h1 className="text-green-400 pb-2">MARINE</h1>

    <p className="pt-2">
     A specialized fleet of vessels is maintained,  each designed for specific purposes:</p>

    <p className="pt-2">Tankers: Transport large quantities of crude oil or refined products over long distances.</p>

    <p className="pt-2">Barges: Provide support and transportation for personnel, equipment, and materials, often in shallow water areas.</p>

    <p className="pt-2">Supply Vessels: Regularly deliver essential supplies and provisions to offshore platforms and drilling rigs.</p>

    <p className="pt-2">Platform Support Vessels:  Assist with the installation, maintenance, and decommissioning of offshore platforms, providing critical support during various project phases.</p>








  </div>

  <div>
<img src={vessel} alt="marine_pics"  className="md:w-[400px] w-[100%]  h-[400px]" />
  </div>

</div>

{/* DRILLING BOX */}
<div className="flex md:flex-row flex-col justify-around  w-[100%]  relative p-2 mt-[4rem]">

<div>
<img src={drilling} alt="marine_pics"  className="md:w-[400px] w-[100%]  h-[400px]" />
  </div>

  <div  className="flex flex-col w-[100%] md:w-[500px]">
    <h1 className="text-green-400 pb-2">DRILLING</h1>

    <p className="pt-2">Highly trained crew members operate the vessels,
     ensuring safe navigation through various weather conditions and adherence to maritime regulations</p>

    <p className="pt-2">Regular maintenance is performed to keep vessels in optimal
     operating condition, minimizing downtime and potential safety hazards.</p>

    <p className="pt-2">Strict safety protocols are implemented, including emergency response procedures and crew safety training,
     to prioritize the safety of personnel and the environment.</p>

    <p className="pt-2">Advanced navigation systems are utilized to ensure precise positioning 
    and efficient travel routes for vessels.</p>

    <p className="pt-2">Communication systems allow for constant communication between vessels,
     shore operations, and other relevant parties.</p>



  </div>



</div>



{/* PROCUREMENT BOX */}
<div className="flex md:flex-row flex-col justify-around  w-[100%]  relative p-2 mt-[4rem]">

  <div  className="flex flex-col w-[100%] md:w-[500px]">
    <h1 className="text-green-400 pb-2">PROCUREMENT</h1>

    <p className="pt-2">Highly trained crew members operate the vessels,
     ensuring safe navigation through various weather conditions and adherence to maritime regulations</p>

    <p className="pt-2">Regular maintenance is performed to keep vessels in optimal
     operating condition, minimizing downtime and potential safety hazards.</p>

    <p className="pt-2">Strict safety protocols are implemented, including emergency response procedures and crew safety training,
     to prioritize the safety of personnel and the environment.</p>

    <p className="pt-2">Advanced navigation systems are utilized to ensure precise positioning 
    and efficient travel routes for vessels.</p>

    <p className="pt-2">Communication systems allow for constant communication between vessels,
     shore operations, and other relevant parties.</p>



  </div>


  <div>
<img src={procurement} alt="marine_pics"  className="md:w-[400px] w-[100%]  h-[400px]" />
  </div>

</div>



{/* LOGISTICS BOX */}
<div className="flex md:flex-row flex-col justify-around  w-[100%]  relative p-2 mt-[4rem]">

<div>
<img src={logistics} alt="marine_pics"  className="md:w-[400px] w-[100%]  h-[400px]" />
  </div>

  <div  className="flex flex-col w-[100%] md:w-[500px]">
    <h1 className="text-green-400 pb-2">LOGISTICS</h1>

    <p className="pt-2"> Meticulous planning is required to ensure the efficient movement of people, equipment, and materials. This involves  scheduling transportation routes, coordinating 
    between different modes of transport (e.g., trucks, ships, airplanes), and obtaining necessary permits.</p>

    <p className="pt-2">Inventory management is crucial to ensure that essential supplies and equipment are readily available on project sites to avoid delays.</p>

    <p className="pt-2">Risk management  mitigates potential disruptions  caused by weather events,  customs delays, or other unforeseen circumstances.</p>

    <p className="pt-2">Communication is key throughout the logistics process, keeping all stakeholders informed about the movement of personnel and equipment
</p>


  </div>



</div>






</section>
  )
}

export default Services