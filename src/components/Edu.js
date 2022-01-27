import React from "react";
import "./home.scss";

function Edu() {
  return (
    <div className=" education  mx-auto justify-center py-28" id="edu">
      <p className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
        Educations
      </p>

      <div className="flex  flex-wrap justify-center pt-2">
        <div className="flex flex-col  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-62">
          <p className="mt-6 text-xl sm:text-2xl  text-center">
            {" "}
            Mtech Computer Science and Engineering
          </p>
          <div className="text-center sm:text-left  text-xs sm:text-base">
            {" "}
            Rajiv gandhi institute of technology, Kottayam, India
          </div>
          <div className="date overflow-hidden  ">2021</div>
        </div>
        <div className="flex flex-col  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-62">
          <p className="mt-6 text-xl sm:text-2xl  text-center">
            {" "}
            Btech Computer Science and Engineering
          </p>
          <div className="text-center sm:text-left">
            {" "}
            Younus College of engineering, Kottarakara, India
          </div>
          <div className="date overflow-hidden ">2018</div>
        </div>
      </div>
    </div>
  );
}

export default Edu;
