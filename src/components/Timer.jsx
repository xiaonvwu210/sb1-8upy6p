import React, { useEffect } from 'react';

const Timer = ({ timeLeft, setTimeLeft, setGameOver }) => {
  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setGameOver]);

  return (
    <div className="text-xl font-bold">
      Time: {timeLeft}s
    </div>
  );
};

export default Timer;