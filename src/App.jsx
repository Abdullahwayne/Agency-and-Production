import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './global.styles.scss'
import ProdHome from './Pages/prodHome'
// import Footer from './Components/Footer'
// import MainPage from './Pages/mainPage'
// import StateHome from './Pages/stateHome'
// import prodHome from './Pages/prodHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <MainPage/>
      <Footer/> */}
     {/* <StateHome/> */}
     <ProdHome/>
    </div>
  )
}

export default App
   