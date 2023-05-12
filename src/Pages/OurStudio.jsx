import React from 'react';
import ButtonMain from '../Components/Button';
import Loader from '../Components/Loader';

const OurStudio = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }, []);
    return (
        <div>
        {isLoading ? <Loader/> : <div className='studio'>
            <ButtonMain name="Post Production" link="/prod/studio/production"/>
        </div>}
        
        </div>
    );
}

export default OurStudio;
