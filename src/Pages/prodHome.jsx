import React from "react";
import '../Components/Button'
import ButtonMain from "../Components/Button";
import { Outlet } from "react-router-dom";
function ProdHome() {
  return (
    <div className="prod-main">
       <div className="buttons-parent">
        <ButtonMain name="What we do"/>
        <ButtonMain name="Press"/>
        <ButtonMain name="Our Studios"/>
        <ButtonMain name="The Team"/>
        <ButtonMain name="Company"/>
        <ButtonMain name="Our Films"/>
        <ButtonMain name="Profile"/>
        <ButtonMain name="Site Map"/>
        </div>




    </div>
  )
}

export default ProdHome;