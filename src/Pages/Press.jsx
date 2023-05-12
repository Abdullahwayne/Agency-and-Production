import React from 'react'
import Loader from '../Components/Loader';

function Press() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
    {isLoading ? <Loader/> :  <div className='press-main'></div>}
   
    </div>
  )
}

export default Press;