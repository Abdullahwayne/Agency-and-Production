import React, { useState } from 'react'
import '../styles/Components/sidebar.scss'
function Sidebar(props) {
  return (
    <aside className={props.open ? 'show-sidebar' : 'sidebar'}>
      <div className='sidebar-li-names'>HOME</div>
      <div className='sidebar-li-names'>MISSION</div>
      <div className='sidebar-li-names'>PORTFOLIO</div>
      <div className='sidebar-li-names'>THE TEAM</div>
      <div className='sidebar-li-names'>CARRERS</div>
      <div className='sidebar-li-names'>PRESS</div>
      <div className='sidebar-li-names'>CONTACT</div>
    </aside>
  )
}
export default Sidebar
