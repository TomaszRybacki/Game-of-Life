import React, { Fragment } from 'react';

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
        <button className="GameControls__button" title="start game">
          <PlayIcon className="GameControls__icon" />
        </button>

        <button className="GameControls__button" title="pause game">
          <PauseIcon className="GameControls__icon" />
        </button>
      </div>

      <div className="GameControls__buttons">
        <button className="GameControls__button" title="stop game">
          <StopIcon className="GameControls__icon" />
        </button>

        <button className="GameControls__button" title="seed random cells">
          <RestartIcon className="GameControls__icon" />
        </button>
      </div>
    </div>
  );
}

export default GameControls;
