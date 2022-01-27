import React from "react";
import { Link } from "react-router-dom";
import { SiTailwindcss, SiFigma } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import "./home.scss";

function Projects({ menuOpen, setMenuOpen }) {
  return (
    <div className=" project max-w-6xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black text-center sm:text-4xl pt-20 sm:pt-0 font-bold">
        Projects
      </p>
      <div className="flex flex-wrap justify-center pt-20 ">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white hover:text-white hover:bg-gray duration-500 shadow-2xl rounded-xl sm:w-52">
          <p className="m-auto text-xl sm:text-2xl  text-center ">
            <Link to={"/design"}> ui/ux Desgin </Link>
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white hover:text-white hover:bg-gray  duration-500 shadow-2xl rounded-xl sm:w-52">
          <p className="mt-6 text-xl sm:text-2xl  text-center">
            {" "}
            <Link to={"/frontend"}>frontend </Link>
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <p className="mt-6 text-xl sm:text-2xl  text-center"> backend</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <p className="mt-6 text-xl sm:text-2xl  text-center">
            Data Analytics
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
