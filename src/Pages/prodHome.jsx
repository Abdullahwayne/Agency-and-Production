import React from "react";
import '../Components/Button'
import ButtonMain from "../Components/Button";
import { Outlet } from "react-router-dom";
function ProdHome() {
  return (
    <div className="prod-main">
       <div className="buttons-parent">
        <ButtonMain name="What we do" link="/prod/portfolio"/>
        <ButtonMain name="Press" link="/prod/press"/>
        <ButtonMain name="Our Studios" link="/prod/studio"/>
        <ButtonMain name="The Team" link="/prod/team"/>
        <ButtonMain name="Company" link="/prod/company"/>
        <ButtonMain name="Our Films" link ="/prod/films"/>
        <ButtonMain name="Profile" link="/prod/profile"/>
        <ButtonMain name="Site Map" link="/prod/map"/>
        </div>




    </div>
  )
}

export default ProdHome;