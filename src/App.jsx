import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./global.styles.scss";
import Footer from "./Components/Footer";
import MainPage from "./Pages/mainPage";
import StateHome from "./Pages/stateHome";
import { Route, Routes } from "react-router-dom";
import './global.styles.scss'
import ProdHome from './Pages/prodHome'
import OurStudio from "./Pages/OurStudio";
import Company from "./Pages/Company";
import Team from "./Pages/Team";
import MenAndMountain from "./Pages/MenAndMountain";
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
        <Route path="/prod/company" Component={Company} />
        <Route path="/prod/team" Component={Team} />
        <Route path="/prod/mountain" Component={MenAndMountain} />

      </Routes>

   
    </div>
  );
}

export default App;
