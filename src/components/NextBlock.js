import Box from '@mui/material/Box';
import GridSquare from './GridSquare';
import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { shapes } from '../utils';
import { useSelector } from 'react-redux';

// Draws the "next" block view showing the next block to drop
const NextBlock = props => {
  const nextShape = useSelector(state => state.game.nextShape);
  const box = shapes[nextShape][0]; // Get the first rotation

  // Map the block to the grid
  const grid = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return <GridSquare key={`${row}${col}`} color={square} />;
    });
  });

  return (
    <Stack
      direction="column"
      alignItems="center" // Align items vertically in the center
      justifyContent="center" // Center the content horizontally
    >
      <Typography variant="h6">Next</Typography>
      <Box className="next-block">{grid}</Box>
    </Stack>
  );
};

export default NextBlock;
