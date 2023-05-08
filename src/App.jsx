import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './global.styles.scss'
import Footer from './Components/Footer'
import MainPage from './Pages/mainPage'
import StateHome from './Pages/stateHome'
import { Route, Routes } from 'react-router-dom'
import './global.styles.scss'
import ProdHome from './Pages/prodHome'
// import Press from './Pages/Press'
// import WhatWeDo from './Pages/whatWedo'
import WhatWeDo from "./Pages/whatWedo";
import Press from "./Pages/Press";
import OurFilms from "./Pages/ourFilms";
import OnePenny from "./Pages/onePenny";
import Deor from "./Pages/Deor";
import PennyMovie from "./Pages/pennyMovie";
import RewardsProgram from "./Pages/rewardsProgram";
import SiteMap from "./Pages/siteMap";
import PostProduction from "./Pages/postProduction";
import Company from "./Pages/Company";
import NotFound from "./Pages/NotFound";
import OurStudio from './Pages/OurStudio'
import Team from './Pages/Team'
import MenAndMountain from './Pages/MenAndMountain'
import Profile from './Pages/Profile'
import { useEffect, useState } from 'react'
import Loader from './Components/Loader'
// import Footer from './Components/Footer'
// import MainPage from './Pages/mainPage'
// import StateHome from './Pages/stateHome'
// import prodHome from './Pages/prodHome'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
    {isLoading ? (
        <Loader />
      ) : (
        <div className='main-parent'>
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
        <Route path="/prod/map" Component={SiteMap}/>
        <Route path="/prod/studio/production" Component={PostProduction}/>
        <Route path="/prod/company" Component={Company} />
        <Route path="/prod/team" Component={Team} />
        <Route path="/prod/films/mountain" Component={MenAndMountain} />
        <Route path= "prod/profile" Component={Profile}/>
        <Route path="*" Component={NotFound}/>
        <Route path='/' Component={MainPage} />
        <Route path='/state' Component={StateHome} />
        <Route path='/prod' Component={ProdHome} />
        <Route path='/prod/studio' Component={OurStudio} />
        <Route path='/' Component={MainPage} />
        <Route path='/state' Component={StateHome} />
        <Route path='/prod' Component={ProdHome} />
        <Route path='/prod/studio' Component={OurStudio} />
        <Route path='/prod/company' Component={Company} />
        <Route path='/prod/team' Component={Team} />
        <Route path='/prod/films/mountain' Component={MenAndMountain} />
        <Route path='prod/profile' Component={Profile} />
        <Route path='*' Component={NotFound} />
      </Routes>
      </div>
      )}
      
      <div>
      <Footer/>

      </div>

    </div>
    
  )
}

export default App
