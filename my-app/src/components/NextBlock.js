import React from 'react';
import GridSquare from './GridSquare';

// Draws the "next" block view showing the next block to drop
const NextBlock = (props) => {
  const box = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  // Map the block to the grid
  const grid = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return <GridSquare key={`${row}${col}`} color={square} />;
    });
  });

  return <div className="next-block">{grid}</div>;
};

export default NextBlock;