import React from "react";
import "./footer.scss";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className=" footer  py-5 bg-#ffc286  border-t-3/2">
      <div className="flex  mt-4">
        <p className="text-black mb-4">
          made with
          <span className="mr-2" role="link" aria-label="heart">
            💙
          </span>
          by -
          <a
            className=" lis text-blue-500 "
            href=" mailto:jvlissiyas@gmail.com"
          >
            lissiyas Antony
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
