import Layout from '../components/Layout'
import { useState , useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import img1 from "../img/img (1).jpg";
import img2 from "../img/img (2).jpg";
import img3 from "../img/img (3).jpg";
import img4 from "../img/img (4).jpg";
import img5 from "../img/img (5).jpg";
import img6 from "../img/img (6).jpg";
import img7 from "../img/img (7).jpg";
import img8 from "../img/img (8).jpg";
import img9 from "../img/img (9).jpg";
import img10 from "../img/img (10).jpg";
import img11 from "../img/img (11).jpg";
import img12 from "../img/img (12).jpg";
import img13 from "../img/img (13).jpg";
import img14 from "../img/img (14).jpg";
import img16 from "../img/img (16).jpg";
import img17 from "../img/img (17).jpg";
import img18 from "../img/img (18).jpg";
import img19 from "../img/img (19).jpg";
import img20 from "../img/img (20).jpg";


const Home = () => {

    const [show, setShow] = useState(false);
    useEffect(() => {   
      const timeout = setTimeout(() => setShow(true), 100);    
      return () => clearTimeout(timeout);   
    
    }, []);

  return (
    <Layout>
    <div >
        <div className="flex flex-col md:flex-row md:h-screen">
          <div
            className={`w-full md:w-1/2 bg-[#5A0006] text-white px-10 md:px-24 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out ${
              show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            <h1 className="text-2xl md:text-5xl tracking-wide font-oooh py-14">
              "Every love story is beautiful, but ours is my favorite."
            </h1>
          </div>

          <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
            <img
              src={img19}
              alt="Love Story"
              className="h-full w-full object-cover object-center grayscale hover:grayscale-0 transition duration-500 ease-in-out"
            />

            <div className="absolute bottom-6 right-6">
              <NavLink to="gallery">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 stroke-white stroke-[1.5] hover:stroke-gray-300 transition-all duration-300 cursor-pointer"
                fill="none"
                viewBox="0 0 48 48"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="23" cy="23" r="19.5" />
                <path d="M17 24h12M23 18l6 6-6 6" />
              </svg>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="bg-[#1c1b1b] py-16 lg:pt-24 lg:py-24 px-5 flex justify-center">
          <div className="w-full max-w-[1100px] md:px-10 lg:px-16">
            <h2 className="text-center text-white text-2xl md:text-3xl xl:text-5xl font-montez mb-8">
              Make your each moment memorable
            </h2>
            <div className="flex flex-wrap md:flex-nowrap bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-[#5d0008] text-white px-6 md:px-10 lg:px-14 xl:px-16 w-full md:w-1/2 flex items-center justify-center text-center">
                <p className="text-base sm:text-xl lg:text-2xl xl:text-4xl py-8 font-montez ">  Millennial RK doesn't just shoot weddings; they capture the energy.They're on the move, chasing smiles, freezing those split-second emotions.Their lenses click, preserving vows, first dances, and laughter explosions.Millennial RK delivers vibrant memories, ready to be relived, shared, and celebrated for generations.</p>
              </div>
              <div className="w-full md:w-1/2 h-[300px] md:h-[500px] lg:h-[600px] lg:w-[55%]">
                <img src={img20} alt="Wedding couple" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>


      <div className="flex justify-center items-center pb-4 bg-[#1c1b1b]">
        <h2 className="text-white text-3xl md:text-4xl font-montez tracking-wider">Gallery</h2>
        <NavLink to="/gallery" className="pt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-white ml-3 stroke-[1.5]"
          fill="none"
          viewBox="0 0 48 48"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="23" cy="23" r="19.5" />
          <path d="M17 24h12M23 18l6 6-6 6" />
        </svg>
        </NavLink>
      </div>

        <section class="bg-[#1c1b1b] pb-10 px-5">
            <div class="px-2 mx-auto max-w-screen-xl lg:px-24 bg-[#1c1b1b]">
                <div class="grid grid-cols-2 md:grid-cols-5 gap-2 h-full">
                    <div class="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
                        <a href="" class="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow">
                            <img src={img17} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                        </a>
                    </div>

                    <div class="col-span-2 sm:col-span-1 md:col-span-2 space-y-2">
                        <a href="" class="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow">
                            <img src={img8} alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                        </a>
                        <div class="grid grid-cols-2 gap-2">
                            <a href="" class="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40">
                                <img src={img12} alt="" class="absolute inset-0 h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                            </a>
                            <a href="" class="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40">
                                <img src={img14} alt="" class="absolute inset-0 h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                            </a>
                        </div>
                    </div>

                    <div class="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
                        <a href="" class="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow">
                            <img src={img9} alt="" class="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>

      <div className="bg-[#1c1b1b] px-4 pb-12 md:py-20">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl">
          <img src={img7} alt="Footer CTA Background"  className="absolute inset-0 w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/50 rounded-2xl" />
          <div className="relative z-10 text-center text-white px-6 py-16 sm:py-20 md:py-28">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-oooh mb-6">
              Celebrate Love That Lasts Forever
            </h1>
            <p className="text-base sm:text-lg font-medium font-montserrat max-w-2xl mx-auto mb-8">At Millennial RK, we believe every love story deserves to be told beautifully.Let us capture your unforgettable moments with emotion and elegance.</p>
            <NavLink to="/contact" className="inline-block bg-[#5d0008] text-white py-2 px-6 lg:text-lg rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#5d0008]/50 transition duration-300">Contact Us</NavLink>
          </div>
        </div>
      </div>

    </div>
    </Layout>
  )
}

export default Home