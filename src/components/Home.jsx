import React from "react";
import "../style/style.css"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home= ()=>{
    return(
        <div  name="home"
        className="h-screen w-full bg-gradient-to-b from-[#00171F] via-[#00171f] to-[#043d50]">
 <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            <span>Hai!</span><br></br>
             <span>I'm Jayashree Saravanan, a Front-end Developer who like to create beautiful and performant products with delightful user experiences </span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            {/* Never compare yourself with others... */}
          </p>

          <div>
            <Link  to="portfolio" smooth duration={750}
             className="font-signature text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer bg-[#ffb703]" >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
             </Link>
          </div>
          </div>
          </div>
        </div>
    )
}
export default Home;