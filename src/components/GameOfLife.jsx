import React, { Fragment } from 'react';

import GameBoard from './GameBoard.jsx';
import GameControls from './GameControls.jsx';
import GameSettings from './GameSettings.jsx';
import GameMenu from './GameMenu.jsx';
import HamburgerMenu from './HamburgerMenu.jsx';


class GameOfLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false
    };
  }

  render() {
    return (
      <Fragment>
        <header className="header">
          <HamburgerMenu />
          <h1 className="header__title">GAME of LIFE</h1>
        </header>

        <main className="main">
          <GameMenu>
            <h2 className="main__menu-title">Game Menu</h2>
            <GameControls />
            <GameSettings />
          </GameMenu>

          <div className="main__trapezoid">
            <h2 className="main__title">generation<br /> 0 </h2>
          </div>

          <GameBoard />
        </main>

        <footer className="footer">
          <span className="footer__txt">Designed &amp; coded with<span className="color-red"> &#10084; </span>by Tomasz Rybacki </span>
        </footer>
      </Fragment>
    );
  }
}

export default GameOfLife;
