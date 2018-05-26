import React, { Fragment } from 'react';

import GameBoard from './GameBoard.jsx';
import GameControls from './GameControls.jsx';
import GameSettings from './GameSettings.jsx';


class GameOfLife extends React.Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <h1 className="header__title">GAME of LIFE</h1>
        </header>

        <GameControls />

        <main className="main">
          <div className="main__trapezoid"><h2 className="main__title">generation<br /> 0 </h2></div>
          <GameBoard />
          <GameSettings />
        </main>

        <footer className="footer">
          <span className="footer__txt">Designed &amp; coded with<span className="color-red"> &#10084; </span>by Tomasz Rybacki </span>
        </footer>
      </Fragment>
    );
  }
}

export default GameOfLife;
