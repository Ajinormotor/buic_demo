import world from "../assets/Pics/world.png"

const Countries = () => {
  return (
<section  className="bg_color mt-[4rem] bg-[#B0C8B2]">

    <div  className="w-[100%]  h-[80vh]  flex flex-col text-center items-center justify-center  pt-5">
    
    <h1 className="pt-5 pb-3  font-bold text-[20px] text-center">Countries where we’ve operated in</h1>
    <h2  className="items-center text-center  md:w-[350px] w-[100%] pb-[3rem]">We operate on almost all continents. We have offices in Azerbaijan, Turkey,
        Georgia, Ukraine, Russia, UAE, Kazakhstan, Turkmenistan and other countries.</h2>

        <img src={world}  alt="countries_pics" className="h-[50vh] w-[100%]"  />
    
    </div>
  

</section>
  )
}

export default Countries