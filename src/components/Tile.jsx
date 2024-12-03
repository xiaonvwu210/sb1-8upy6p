import React from 'react';
import { herbImages } from '../data/herbImages';

const Tile = ({ value, isSelected, onClick }) => {
  if (!value) return (
    <div className="w-16 h-16 bg-transparent" />
  );

  return (
    <button
      onClick={onClick}
      className={`w-16 h-16 flex items-center justify-center rounded-lg
        ${isSelected ? 'ring-4 ring-yellow-400 bg-yellow-50' : 'bg-white'}
        hover:bg-yellow-50 transition-all duration-200
        border-2 border-gray-200 shadow-sm`}
    >
      <img 
        src={herbImages[value]} 
        alt={value}
        className="w-12 h-12 object-contain"
      />
    </button>
  );
};

export default Tile;