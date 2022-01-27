import React from "react";
import "./home.scss";

function Skills() {
  return (
    <div className=" skills w-4/5 mx-auto justify-center py-28" id="skills">
      <p className="text-2xl text-black text-center sm:text-4xl pt-4 pb-8 font-bold">
        Skills
      </p>
      <div className=" flex flex-col md:flex-row  mx-auto  justify-center ">
        <div className="flex  p-12 pt-12 mx-auto bg-white shadow-2xl rounded-xl text-xs sm:text-base ">
          <ul>
            <li>HTML ,CSS, Bootstrap, JQuery, React.Js , Django</li>
            <li>Python, C++, SQL, R, JavaScript</li>
            <li>Figma, Adobe Xd, Tableau</li>
            <li>MS Excel, Google Sheets, SQL Server, PostgreSQL</li>
            <li>Operating System: Windows, Linux, macOS</li>
          </ul>
        </div>

        <div className="pt-8  text-xs sm:text-base justify-center ">
          <ul>
            <li>&#8594; Knowledge of Excel and strong analytical ability</li>
            <li>&#8594; Outstanding creativity and drive</li>
            <li>&#8594; Excellent written and Oral Communication Skills</li>
            <li>&#8594; Strong attention to details</li>
            <li>&#8594; Ability to work in a fast-paced environment </li>
            <li>&#8594; Strong interpersonal skills</li>
            <li>
              &#8594; Ability to work well independently or within a team
              environment
            </li>
            <li>
              &#8594; Strong time management skills and the ability to
              prioritize
            </li>
            <li>&#8594; Technical Support and Customer Service Skill</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
