import React from 'react';
import PropTypes from 'prop-types';

import PlayIcon from './../iconComponents/PlayIcon.jsx';
import PauseIcon from './../iconComponents/PauseIcon.jsx';
import StopIcon from './../iconComponents/StopIcon.jsx';
import RestartIcon from './../iconComponents/RestartIcon.jsx';

function GameControls(props) {
  return (
    <div className="GameControls">
      <div className="GameControls__label">
        Controls
      </div>
      <div className="GameControls__buttons">
        <button className="GameControls__button" title="start game" onClick={() => props.startGame()}>
          <PlayIcon className="GameControls__icon" />
        </button>

        <button className="GameControls__button" title="pause game" onClick={() => props.pauseGame()}>
          <PauseIcon className="GameControls__icon" />
        </button>
      </div>

      <div className="GameControls__buttons">
        <button className="GameControls__button" title="stop game" onClick={() => props.stopGame()}>
          <StopIcon className="GameControls__icon" />
        </button>

        <button className="GameControls__button" title="seed random cells" onClick={() => props.seedRandomCells()}>
          <RestartIcon className="GameControls__icon" />
        </button>
      </div>
    </div>
  );
}

GameControls.propTypes = {
  startGame: PropTypes.func.isRequired,
  pauseGame: PropTypes.func.isRequired,
  stopGame: PropTypes.func.isRequired,
  seedRandomCells: PropTypes.func.isRequired
};

export default GameControls;
