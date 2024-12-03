import React, { useState, useEffect } from 'react';
import { generateBoard } from '../utils/gameLogic';
import Tile from './Tile';
import Timer from './Timer';
import ScoreBoard from './ScoreBoard';
import MatchEffect from './MatchEffect';

const GameBoard = () => {
  const [board, setBoard] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [matchEffect, setMatchEffect] = useState(null);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newBoard = generateBoard(8, 8);
    setBoard(newBoard);
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    setSelectedTiles([]);
    setMatchEffect(null);
  };

  const handleTileClick = (row, col, event) => {
    if (gameOver) return;

    const clickedTile = { row, col, value: board[row][col] };
    
    if (selectedTiles.length === 0) {
      setSelectedTiles([clickedTile]);
    } else if (selectedTiles.length === 1) {
      const firstTile = selectedTiles[0];
      
      if (firstTile.row === row && firstTile.col === col) {
        setSelectedTiles([]);
        return;
      }

      if (firstTile.value === clickedTile.value) {
        // Show match effect
        const rect = event.target.getBoundingClientRect();
        setMatchEffect({
          herb: clickedTile.value,
          position: {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
          }
        });

        // Update board
        const newBoard = [...board];
        newBoard[firstTile.row][firstTile.col] = null;
        newBoard[row][col] = null;
        setBoard(newBoard);
        setScore(score + 10);
        setSelectedTiles([]);
      } else {
        setSelectedTiles([clickedTile]);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex justify-between w-full max-w-2xl mb-4">
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} setGameOver={setGameOver} />
        <ScoreBoard score={score} />
      </div>
      
      <div className="grid grid-cols-8 gap-2 bg-gray-100 p-4 rounded-xl shadow-lg">
        {board.map((row, rowIndex) => (
          row.map((tile, colIndex) => (
            <Tile
              key={`${rowIndex}-${colIndex}`}
              value={tile}
              isSelected={selectedTiles.some(t => t.row === rowIndex && t.col === colIndex)}
              onClick={(e) => handleTileClick(rowIndex, colIndex, e)}
            />
          ))
        ))}
      </div>

      {matchEffect && (
        <MatchEffect
          herb={matchEffect.herb}
          position={matchEffect.position}
          onComplete={() => setMatchEffect(null)}
        />
      )}

      {gameOver && (
        <div className="mt-4">
          <button
            onClick={startNewGame}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600
              transition-colors duration-200 font-semibold shadow-md"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default GameBoard;