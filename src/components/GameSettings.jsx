import React from 'react';

import NormalSpeedIcon from './../iconComponents/NormalSpeedIcon.jsx';
import FastSpeedIcon from './../iconComponents/FastSpeedIcon.jsx';
import BoardSizeIcon from './../iconComponents/BoardSizeIcon.jsx';

function GameSettings(props) {
  return (
    <div className="GameSettings">
      <div className="GameSettings__label">
        Settings
      </div>
      <div className="GameSettings__buttons">
        <button className="GameSettings__button GameSettings__button--round" title="normal speed">
          <NormalSpeedIcon className="GameSettings__icon GameSettings__icon--green" />
        </button>

        <button className="GameSettings__button GameSettings__button--round" title="fast speed">
          <FastSpeedIcon className="GameSettings__icon GameSettings__icon--red" />
        </button>
      </div>

      <div className="GameSettings__buttons">
        <button className="GameSettings__button" title="normal size">
          <BoardSizeIcon className="GameSettings__icon GameSettings__icon--blue" />
        </button>

        <button className="GameSettings__button" title="small size">
          <BoardSizeIcon className="GameSettings__icon GameSettings__icon--orange" />
        </button>
      </div>
    </div>
  );
}

export default GameSettings;
