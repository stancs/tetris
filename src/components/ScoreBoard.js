import { pause, restart, resume } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import React from 'react';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const ScoreBoard = props => {
  const dispatch = useDispatch();
  const game = useSelector(state => state.game);
  const { score, isRunning, gameOver } = game;

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Score:{score}</Typography>
      <Typography variant="h5">Level: 1</Typography>
      <Button
        onClick={e => {
          if (gameOver) {
            return;
          }
          if (isRunning) {
            dispatch(pause());
          } else {
            dispatch(resume());
          }
        }}
        startIcon={isRunning ? <PauseCircleFilledOutlinedIcon /> : <PlayCircleFilledOutlinedIcon />}
        variant="contained"
      >
        {isRunning ? 'Pause' : 'Play'}
      </Button>
      <Button
        onClick={e => {
          dispatch(restart());
        }}
        startIcon={<RestartAltOutlinedIcon />}
        variant="contained"
      >
        Restart
      </Button>
    </Stack>
  );
};

export default ScoreBoard;
