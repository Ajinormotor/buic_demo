import bulb from "../assets/Pics/bulb.png"
import star from "../assets/Pics/star.png"
import edges from "../assets/Pics/edges.png"

const Objectives = () => {
  return (
 <section className="overflow-x-hidden mt-[4rem] mb-[2rem]"  
 data-aos="fade-right" 
>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[100%] gap-[0%]  md:mx-[1rem] mx-1 p-4">

        <div  className="w-[95%] h-[50vh] flex flex-col items-center justify-center text-center shadow-md">
            <img src={star}  alt="objective_pics"  className="w-[90px] h-[90px]" />

            <h1 className="font-bold text-[27px] pt-[1rem]">Our Mission</h1>
            <p  className="pt-[1rem] p-2"> Our mission is to deliver safe, reliable, and sustainable
 solutions that empower our clients to achieve their energy goals while minimizing environmental impact.</p>

        </div>

        <div  className="w-[95%] h-[50vh] flex flex-col items-center text-center justify-center shadow-md">
            <img src={bulb}  alt="objective_pics"  className="w-[100px] h-[100px]" />

            <h1 className="font-bold text-[27px] pt-[1rem]">Our Vission</h1>
            <p className="pt-[1rem] p-2"> Our Vision is to provide first-class quality and services to all our 
                valuable customers and to always be innovative and alert in the marketplace we serve.</p>

        </div>

        <div  className="w-[95%] h-[50vh] flex flex-col items-center justify-center text-center  shadow-md">
            <img src={edges}  alt="objective_pics"  className="w-[100px] h-[90px]" />

            <h1 className="font-bold  text-[27px] pt-[1rem]">Our Values</h1>
            <p className="pt-[1rem] p-2">We are guided by a core set of values: safety, integrity, excellence,
                and collaboration. These values underpin every aspect of our operations and define who we are</p>

        </div>

    </div>
 </section>
  )
}

export default Objectives