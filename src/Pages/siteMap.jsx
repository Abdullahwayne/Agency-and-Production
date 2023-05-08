import React from 'react'
import ButtonMain from '../Components/Button';
import '../styles/Pages/SiteMap.scss'
function SiteMap() {
  return (
    <div className='sitemap-main'>
        <div className="sitemap-main-buttons-wrapper">
        <ButtonMain name="Profile" link="/prod/profile"/>
        <ButtonMain name="Rewards Program" link="/prod/rewards" className="sitemap-main-buttons-wrapper-rewards-btn"/>
        <ButtonMain name="Company" link="/prod/company"/>

        </div>

    </div>
  )
}

export default SiteMap;