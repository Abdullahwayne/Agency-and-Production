import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './global.styles.scss'
import Footer from './Components/Footer'
import MainPage from './Pages/mainPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MainPage/>
      <Footer/>
    </div>
  )
}

export default App
   