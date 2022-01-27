import React from "react";
import "./home.scss";

import { useEffect, useRef } from "react";
import { init } from "ityped";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Edu from "./Edu";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import profile from "./profile.png";

function Home({ menuOpen, setMenuOpen }) {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/contact");
  }

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Data Analyst", "Front-end Developer"],
    });
  }, []);
  return (
    <div className=" home  " id="">
      <div className=" content  ">
        <div className="main-content justify-center">
          <div className="name">
            <div>
              <p className="hi"> Hi I'am</p>{" "}
              <p className=" lissiyas  text-gray-900">Lissiyas Antony</p>{" "}
              <div className="fresher">
                <p className=" text-gray-900  inline-block ">
                  <span ref={textRef}></span>
                </p>
              </div>
              <div className=" insta flex justify-center ">
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-grey-800 hover:bg-ins  rounded-full hover:text-white transition-colors duration-300"
                  href="https://github.com/lissiyas"
                >
                  <FaGithub />
                  <span className="sr-only">github</span>
                </a>

                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-ins  rounded-full hover:text-white transition-colors duration-300"
                  href="https://github.com/lissiyas"
                >
                  <FaLinkedin />
                  <span className="sr-only">Linkedin</span>
                </a>

                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-yellow-800 hover:bg-ins  rounded-full hover:text-white transition-colors duration-300"
                  href="https://github.com/lissiyas"
                >
                  <FaInstagram />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
            <div onClick={handleClick} class="button2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button> CONTACT ME</button>
            </div>
          </div>
        </div>

        {/*Aout page */}
      </div>
      <div className="details ">
        <div className="justify-center md:justify-center ">
          <img
            className="photo justify-center sm:justify-center"
            src={profile}
          />{" "}
        </div>
        <div className=" summary ">
          An active, motivated, and highly dynamic individual with great working
          skills and a wide range of practical and theoretical computer science
          and engineering experience. Design, build, and execute software
          applications that meet complex and critical business needs. Expertise
          in statistics, mathematics, and analytics. As a Data Analyst, I'm
          looking to put my extensive knowledge of business operations and
          analytics tools to good use. Expert in meeting tight deadlines and
          completing difficult projects. Excellent interpersonal skills and a
          strong communicator Strong management abilities and a systematic
          aptitude, as well as an intuitive capacity to make decisions,
          coordinate, and synthesise data
        </div>
      </div>

      <Edu />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
