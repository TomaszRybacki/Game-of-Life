import React, { Fragment } from 'react';

import PlayIcon from './../iconComponents/PlayIcon.jsx';
import PauseIcon from './../iconComponents/PauseIcon.jsx';
import StopIcon from './../iconComponents/StopIcon.jsx';
import RestartIcon from './../iconComponents/RestartIcon.jsx';
import NormalSpeedIcon from './../iconComponents/NormalSpeedIcon.jsx';
import FastSpeedIcon from './../iconComponents/FastSpeedIcon.jsx';
import BoardSizeIcon from './../iconComponents/BoardSizeIcon.jsx';


class GameOfLife extends React.Component {
  render() {
    return (
      <Fragment>
        <PlayIcon className="icon" />
        <PauseIcon className="icon" />
        <StopIcon className="icon" />
        <RestartIcon className="icon" />
        <NormalSpeedIcon className="icon" />
        <FastSpeedIcon className="icon" />
        <BoardSizeIcon className="icon" />
      </Fragment>
    );
  }
}

export default GameOfLife;
