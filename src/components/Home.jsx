import React from "react";
import HeroImage from "../assets/portfolio/owner.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
      <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="Saidul-Pic"
            className="rounded-full mx-auto w-2/3 md:w-full bg-gradient-to-r from-cyan-500 to-purple-500"
          />
        </div> {/* End of image */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-md sm:text-7xl font-bold text-white">
            I'm a 
             <span className="pl-2 text-yellow-500">M</span>
            <span className="text-red-500">E</span>
            <span className="text-green-500">R</span>
            <span className="pr-2 text-blue-500">N</span>
              Stack Web Developer
          </h2> 
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 years of experience building websites and desgining software.
            I love to work on web application using technologies like
            React, Tailwind, Redux and Backend.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white font-signature font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        {/* saidul basar bappy */}
      </div>
    </div>
  );
};

export default Home;
