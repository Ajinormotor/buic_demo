import Slider from "react-slick";
import marine from "../assets/Pics/Frame 42 (1).png";
import dredging from "../assets/Pics/AdobeStock_327044012_Preview.png";
import vessel from "../assets/Pics/Frame 42 (2).png";

const Service = () => {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768, // Small screen breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 550, // Extra small screen breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],

        // appendDots: dots => (
        //     <div className="absolute bottom-4 left-0 right-0 flex justify-center">{dots}</div>
        // ),

        // customPaging: i => (
        //     <div className="w-4 h-4 bg-green-400 rounded-full"></div> // Customize dot style here
        // )
    };

    return (
        <section className="">
            <div className="flex flex-col gap-3">
                <div className="text-center items-center justify-center">
                    <h1 className="pb-[1rem] font-extrabold text-[25px] text-[#002E05]">Our Services</h1>
                    <p className="pb-[2rem]">As a professional company, we are specialized to provide you the following services: </p>
                    <p>Trading crude oil and refined petroleum products: Our team is ready support your company to realize your trading and commerce businesses in crude oil and refined petroleum products. Crude oil and refined petroleum products (such as gasoline, jet fuel and diesel) are some of the most widely used and traded commodities in the world. Thus, as TTOIL Trading and Commerce Agency we are involved in the exploration, extraction, refining and marketing and transporting of these commodities worldwide. As a professional company, we are specialized to support to realize your trading and commerce businesses in crude oil and refined petroleum products.</p>

                    {/* SLIDER */}
                    <div className="flex w-[100%] ">
                        <Slider className="justify-between items-center flex overflow-y-hidden text-green-400 p-4 w-[100%] mx-auto overflow-x-hidden " {...settings}>
                            {/* Slider 1 */}
                            <div className="p-3 relative flex flex-col w-[100%] md:w-[300px] h-[500px]">
                                <img src={marine} alt="slider_1" className="md:w-[300px] w-[100%] h-[300px]" />
                                <h1 className="text-priGreen font-bold font-tekfont ">Drilling</h1>
                            </div>

                            {/* Slider 2 */}
                            <div className="p-3 justify-center items-center text-center relative flex flex-col w-[100%] md:w-[300px] h-[500px]">
                                <img src={dredging} alt="slider_2" className="md:w-[300px] w-[100%] h-[300px]" />
                                <h1 className="text-priGreen font-bold font-tekfont ">Dredging</h1>
                            </div>

                            {/* Slider 3 */}
                            <div className="p-3 justify-center items-center text-center relative flex flex-col w-[100%] md:w-[300px] h-[500px]">
                                <img src={vessel} alt="slider_3" className="md:w-[300px] w-[100%] h-[300px]" />
                                <h1 className="text-priGreen font-bold font-tekfont ">Marine</h1>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
