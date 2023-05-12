import React from "react";
import "../styles/components/Header.scss";
import { HiUserCircle } from "react-icons/hi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import {MdSupervisedUserCircle} from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-main">
      <div className="header-main-flex">
        <div className="header-main-flex-backbutton">
        <Link to="/" style={{textDecoration:"none"}} >          <button  className="header-main-flex-backbutton-back button-styled">
            <BsFillArrowLeftCircleFill size={35}/>
          </button>
          </Link>

        </div>
        <div className="header-main-flex-login-signup">
        <Link to="/login" style={{textDecoration:"none"}}>          <button
            
            className="header-main-flex-login-signup-login button-styled"
          >
            <HiUserCircle size={35} />
          </button>
          </Link>

          <Link to="/signup" style={{textDecoration:"none"}}>
          <button
            
            className="header-main-flex-login-signup-signup button-styled"
          >
            <MdSupervisedUserCircle size={35} />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
