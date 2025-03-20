// Timer.jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <div className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
        Segundos: {seconds}
      </div>
      <button
        onClick={startTimer}
        className="p-2 bg-green-500 text-white rounded"
      >
        Iniciar
      </button>
      <button
        onClick={stopTimer}
        className="p-2 bg-red-500 text-white rounded"
      >
        Parar
      </button>
    </div>
  );
};

export default Timer;
