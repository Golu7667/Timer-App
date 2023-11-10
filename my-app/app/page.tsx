"use client"
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className='w-100vw h-100vh flex justify-center items-center'>
      <div className='w-96vw h-96vh grid justify-center items-center mt-44'>
        <p className='w-96 flex justify-center mt-42 text-6xl font-extrabold font-mono text-slate-600'>Timer App</p>
      <div className='w-96vw h-96vh flex justify-center mt-12 text-4xl font-extrabold'>{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</div>
      <button onClick={handleStart} className='w-96 h-8 bg-cyan-400 rounded-lg mt-8 text-white font-extrabold'>Start</button>
      <button onClick={handleStop} className='w-96 h-8 bg-cyan-400 rounded-lg mt-4 text-white font-extrabold'>Stop</button>
      <button onClick={handleReset} className='w-96 h-8 bg-cyan-400 rounded-lg mt-4 text-white font-extrabold'>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
