import React, { useEffect, useState } from 'react';
import '../styles/Pages/whatWeDo.scss'
import Loader from '../Components/Loader';
const WhatWeDo = () => {
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
    return (
        <div>
        {isLoading ? <Loader/> :  <div className='what-main'>
            
            </div>}
       
        </div>
    );
}

export default WhatWeDo;
