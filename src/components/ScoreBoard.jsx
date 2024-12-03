import React from 'react';

const ScoreBoard = ({ score }) => {
  return (
    <div className="text-xl font-bold">
      Score: {score}
    </div>
  );
};

export default ScoreBoard;