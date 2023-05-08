import React from 'react'
import ButtonMain from '../Components/Button';
import '../styles/Pages/ourFilms.scss';

function OurFilms() {
  return (
    <div className='films-main'>
      <div className='films-main-buttons'>
        <ButtonMain name="Men & Mountain" link="/prod/films/mountain"/>
        <ButtonMain name="One Penny" link="/prod/films/penny"/>
        <ButtonMain name="Deor" link="/prod/films/deor"/>




      </div>
    </div>
  )
}

export default OurFilms;