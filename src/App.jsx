import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./global.styles.scss";
import Footer from "./Components/Footer";
import MainPage from "./Pages/mainPage";
import StateHome from "./Pages/stateHome";
import { Route, Routes } from "react-router-dom";
import './global.styles.scss'
import ProdHome from './Pages/prodHome'
// import Press from './Pages/Press'
// import WhatWeDo from './Pages/whatWedo'
import OurStudio from "./Pages/OurStudio";
import WhatWeDo from "./Pages/whatWedo";
import Press from "./Pages/Press";
import OurFilms from "./Pages/ourFilms";
import OnePenny from "./Pages/onePenny";
import Deor from "./Pages/Deor";
import PennyMovie from "./Pages/pennyMovie";
import RewardsProgram from "./Pages/rewardsProgram";
import SiteMap from "./Pages/siteMap";
import PostProduction from "./Pages/postProduction";
// import Footer from './Components/Footer'
// import MainPage from './Pages/mainPage'
// import StateHome from './Pages/stateHome'
// import prodHome from './Pages/prodHome'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/state" Component={StateHome}/>
        <Route path="/prod" Component={ProdHome} />
        <Route path="/prod/studio" Component={OurStudio}/>
        <Route path="/prod/services" Component={WhatWeDo}/>
        <Route path="/prod/press" Component={Press}/>
        <Route path="/prod/films" Component={OurFilms}/>
        <Route path="/prod/films/penny" Component={OnePenny}/>
        <Route path="/prod/films/deor" Component={Deor}/>
        <Route path="/prod/films/penny/pennymovie" Component={PennyMovie}/>
        <Route path="/prod/rewards" Component={RewardsProgram}/>
        <Route path="/prod/sitemap" Component={SiteMap}/>
        <Route path="/prod/studio/production" Component={PostProduction}/>
      </Routes>

   
    </div>
  );
}

export default App;
