import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="copy">
          <p>
            &copy; {new Date().getFullYear()} by{" "}
            <a
              href="https://www.riddlehead.net/"
              target="_blank"
              rel="noreferrer"
            >
              RiddleHead
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
