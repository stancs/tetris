import './App.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Controls from './components/Controls';
import Divider from '@mui/material/Divider';
import GridBoard from './components/GridBoard';
import MessagePopup from './components/MessagePopup';
import NextBlock from './components/NextBlock';
import { Provider } from 'react-redux';
import React from 'react';
import ScoreBoard from './components/ScoreBoard';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// TODO: createStore is deprecated. Will need to update this
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <Box sx={{ flexGrow: 1, margin: '8px' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React Tetris
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Stack alignItems="center" divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
        <Stack direction="row" spacing={2}>
          <GridBoard />
          <Stack spacing={2} justifyContent="space-evenly">
            <ScoreBoard />
            <NextBlock />
          </Stack>
        </Stack>
        <Controls />
      </Stack>

      <MessagePopup />
    </Provider>
  );
}

export default App;
