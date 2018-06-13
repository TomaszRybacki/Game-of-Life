import React from 'react';
import PropTypes from 'prop-types';

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
        <button className="GameSettings__button GameSettings__button--round" title="normal speed" onClick={() => props.normalSpeed()}>
          <NormalSpeedIcon className="GameSettings__icon GameSettings__icon--green" />
        </button>

        <button className="GameSettings__button GameSettings__button--round" title="fast speed" onClick={() => props.fastSpeed()}>
          <FastSpeedIcon className="GameSettings__icon GameSettings__icon--red" />
        </button>
      </div>

      <div className="GameSettings__buttons">
        <button id="mobile" disabled={!props.isActive} className="GameSettings__button" title="normal size" onClick={() => props.normalSize()}>
          <BoardSizeIcon className="GameSettings__icon GameSettings__icon--blue" />
        </button>

        <button className="GameSettings__button" title="small size" onClick={() => props.smallSize()}>
          <BoardSizeIcon className="GameSettings__icon GameSettings__icon--orange" />
        </button>
      </div>
    </div>
  );
}

GameSettings.propTypes = {
  normalSpeed: PropTypes.func.isRequired,
  fastSpeed: PropTypes.func.isRequired,
  normalSize: PropTypes.func.isRequired,
  smallSize: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default GameSettings;
