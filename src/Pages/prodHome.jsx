import React, { useEffect, useState } from "react";
import '../Components/Button'
import ButtonMain from "../Components/Button";
import { Outlet } from "react-router-dom";
import Loader from "../Components/Loader";
function ProdHome() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
    {isLoading ? <Loader/> :( <div className="prod-main">
       <div className="buttons-parent">
        <ButtonMain name="What we do" link="/prod/services"/>
        <ButtonMain name="Press" link="/prod/press"/>
        <ButtonMain name="Our Studios" link="/prod/studio"/>
        <ButtonMain name="The Team" link="/prod/team"/>
        <ButtonMain name="Company" link="/prod/company"/>
        <ButtonMain name="Our Films" link ="/prod/films"/>
        <ButtonMain name="Profile" link="/prod/profile"/>
        <ButtonMain name="Site Map" link="/prod/map"/>
        </div>




    </div>) }
   
    </div>
  )
}

export default ProdHome;