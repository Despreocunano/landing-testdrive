// NumberCounter.js
import React, { useState, useEffect } from 'react';

const NumberCounter = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber < 92) {
        setCurrentNumber((prevNumber) => prevNumber + 4);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentNumber]);

  return (
    <div className="counter">
      {currentNumber}
    </div>
  );
};

export default NumberCounter;
