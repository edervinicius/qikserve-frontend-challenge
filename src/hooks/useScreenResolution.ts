import { useState, useEffect } from 'react';

const useScreenResolution = () => { 
  const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        let isMobileChecked = false; 
        if(window.innerWidth<=800) isMobileChecked = true
        
        setIsMobile(isMobileChecked)
    };

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return {isMobile};
};
export {useScreenResolution};