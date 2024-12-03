import React from 'react';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">中草药连连看</h1>
        <GameBoard />
      </div>
    </div>
  );
}

export default App;