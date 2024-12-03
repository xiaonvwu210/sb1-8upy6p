import React, { useEffect } from 'react';
import { herbDescriptions } from '../data/herbImages';

const MatchEffect = ({ herb, position, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!position) return null;

  return (
    <div
      className="fixed z-50 bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-lg
        transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
      style={{
        left: position.x,
        top: position.y,
        animation: 'fadeOut 1s ease-out'
      }}
    >
      {herbDescriptions[herb]}
    </div>
  );
}

export default MatchEffect;