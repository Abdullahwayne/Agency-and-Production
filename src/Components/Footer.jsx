import React from 'react'
import '../styles/Components/footer.scss'
import { BsGithub } from 'react-icons/bs'
import { BsVimeo } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-main-footerpadding'>
        <div className='footer-main-footerpadding-subfooter1'>
          <div className='footer-main-footerpadding-subfooter1-logo'></div>
          <div className='footer-main-footerpadding-subfooter1-content'>
            <p>
              TM & (C) 2022 StonePark Productions Inc. - All rights reserved
              <br />
              AStonePark Company
            </p>
          </div>
        </div>
        <div className='footer-main-footerpadding-subfooter2'>
          <div className='footer-main-footerpadding-subfooter2-logocontainer'>
            <BsGithub size={20} />
            <BsVimeo size={20} />
            <FaFacebookF size={20} />
            <FaMedium size={20} />
            <FaInstagramSquare size={20} />
            <BsTwitter size={20} />
            <FaYoutube size={20} />
            <FaLinkedinIn size={20} />
            <FaTelegramPlane size={20} />
          </div>
        </div>
        <div className='footer-main-footerpadding-subfooter3'>
          <div className='footer-main-footerpadding-subfooter3-logoutcontainer'>
            <div className='footer-main-footerpadding-subfooter3-logoutcontainer-michael'>
              <p>Michael DeVita</p>
            </div>
            <div className='footer-main-footerpadding-subfooter3-logoutcontainer-logout'>
              | Logout
            </div>
          </div>
        </div>
        <div className='footer-main-footerpadding-subfooter4'>
          <p>Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
