import React from "react";
import '../styles/Pages/mainPage.scss'
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container">
      <div className="container-one">
        <Link style={{textDecoration:"none"}} to="/state"><span>Real Estate </span></Link>
        <Link style={{textDecoration:"none"}} to="/state">
        <h1>Development</h1>
        </Link>
      </div>
      <div className="container-two">
      <Link style={{textDecoration:"none"}} to="/prod">
        <span>Film </span>
        </Link>
        <Link style={{textDecoration:"none"}} to="/prod">
        <h1> Production</h1>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
