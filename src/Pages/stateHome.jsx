import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { FaBars } from 'react-icons/fa'
import '../styles/Pages/stateHome.scss'
import Footer from '../Components/Footer'
import Loader from '../Components/Loader'

function StateHome() {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
    {isLoading ? <Loader/> : (<div className='statehomemain'>
      <div className='statehomemain-sidebar-Container'>
        <div className='statehomemain-sidebar-Container-btn-container'>
          <button
            onClick={() => setOpen(!open)}
            className='statehomemain-sidebar-Container-btn-container-sidebar-toggle'
          >
            <FaBars size={40} />
          </button>
        </div>

        <Sidebar open={open} />
      </div>
    </div>)} 
    
    </div>
  )
}

export default StateHome
