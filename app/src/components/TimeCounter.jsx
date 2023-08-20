import React, { useState, useEffect } from "react"

export const TimerCounter = () => {
  
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleIsRunning = () => {
    setIsRunning(!isRunning);
  }
  
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1/100);
      }, 1000/100);
    }
    
    return () => {
      clearInterval(interval);
    }
  }, [isRunning])

  return (
    <div>
      <div>
        <p>{Math.round(count * 100) / 100}</p>
      </div>
      <div>
        <button onClick={toggleIsRunning}>
          {isRunning ? 'stop': 'start'}
        </button>
      </div>
    </div>
  );
}