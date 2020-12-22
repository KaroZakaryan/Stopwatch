import { useState } from 'react';

import useTimer from './useTimer';

const useStopwatch = () => {
  const [laps, setLaps] = useState([]);
  const { isRunning, setIsRunning, elapsedTime, setElapsedTime } = useTimer();

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setLaps([]);
  };

  const handleAddLap = () => {
    const prevTotal =
      laps.length > 0 ? laps.reduce((acc, curr) => acc + curr, 0) : 0;
    const currentLap = laps.length > 0 ? elapsedTime - prevTotal : elapsedTime;

    if (isRunning) {
      setLaps([...laps, currentLap]);
    }
  };

  return {
    elapsedTime: elapsedTime.toFixed(1),
    laps,
    isRunning,
    addLap: () => handleAddLap(),
    resetTimer: () => handleReset(),
    startTimer: () => setIsRunning(true),
    stopTimer: () => setIsRunning(false),
  };
};

export default useStopwatch;
