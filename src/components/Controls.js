import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveDown, moveLeft, moveRight, rotate } from '../actions';

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
    <div className={`controls`}>
      {/* left */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={e => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveLeft());
        }}
      >
        Left
      </button>

      {/* right */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={e => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveRight());
        }}
      >
        Right
      </button>

      {/* rotate */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={e => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(rotate());
        }}
      >
        Rotate
      </button>

      {/* down */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={e => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveDown());
        }}
      >
        Down
      </button>
    </div>
  );
};

export default Controls;
