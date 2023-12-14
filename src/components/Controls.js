import React, { useEffect } from 'react';
import { moveDown, moveLeft, moveRight, rotate } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Button from '@mui/material/Button';
import Rotate90DegreesCwIcon from '@mui/icons-material/Rotate90DegreesCw';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import Stack from '@mui/material/Stack';

const Controls = props => {
  const dispatch = useDispatch();
  const isRunning = useSelector(state => state.game.isRunning);
  const gameOver = useSelector(state => state.game.gameOver);

  useEffect(() => {
    const handleKeyPress = event => {
      if (!isRunning || gameOver) {
        return;
      }

      switch (event.key) {
        case 'ArrowLeft':
          dispatch(moveLeft());
          break;
        case 'ArrowRight':
          dispatch(moveRight());
          break;
        case 'ArrowUp':
          dispatch(rotate());
          break;
        case 'ArrowDown':
          dispatch(moveDown());
          break;
        default:
          // Do nothing for other keys
          break;
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('keydown', handleKeyPress);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [dispatch, isRunning, gameOver]);

  return (
    <Stack direction="row" alignItems="flex-end" justifyContent="space-even" spacing={2}>
      <Button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={e => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveLeft());
        }}
        startIcon={<ArrowBackOutlinedIcon />}
        variant="contained"
      />

      <Stack spacing={2} alignItems="center" justifyContent="center">
        <Button
          fullWidth
          component="label"
          variant="contained"
          disabled={!isRunning || gameOver}
          className="control-button"
          onClick={e => {
            if (!isRunning || gameOver) {
              return;
            }
            dispatch(rotate());
          }}
          startIcon={<Rotate90DegreesCwIcon />}
        >
          Rotate
        </Button>

        <Button
          fullWidth
          // component="label"
          variant="contained"
          disabled={!isRunning || gameOver}
          className="control-button"
          onClick={e => {
            if (!isRunning || gameOver) {
              return;
            }
            dispatch(moveDown());
          }}
          startIcon={<SouthOutlinedIcon />}
        />
      </Stack>
      <Button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={e => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveRight());
        }}
        startIcon={<ArrowForwardOutlinedIcon />}
        variant="contained"
      />
    </Stack>
  );
};

export default Controls;
