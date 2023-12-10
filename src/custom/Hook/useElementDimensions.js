import { useState, useEffect } from 'react';

const useElementDimensions = (selector) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const element = document.querySelector(selector);
      if (element) {
        const { offsetHeight, offsetWidth } = element;
        setDimensions({ height: offsetHeight, width: offsetWidth });
      }
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [selector]);

  return dimensions;
};

export default useElementDimensions;
