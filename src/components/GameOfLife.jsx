import React, { Fragment } from 'react';

import GameBoard from './GameBoard.jsx';
import GameControls from './GameControls.jsx';
import GameSettings from './GameSettings.jsx';
import GameMenu from './GameMenu.jsx';
import HamburgerMenu from './HamburgerMenu.jsx';


class GameOfLife extends React.Component {
  constructor(props) {
    super(props);
    this.boardRows = 20;
    this.boardColumns = 40;
    this.gameSpeed = 100;

    this.state = {
      generation: 0,
      board: Array(this.boardRows).fill(Array(this.boardColumns).fill(false))
    };
  }

  handleCellClick = (row, column) => {
    const boardCopy = copyArray(this.state.board);
    boardCopy[row][column] = !boardCopy[row][column];
    this.setState({
      board: boardCopy
    });
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
            <h2 className="main__title">generation<br /> {this.state.generation} </h2>
          </div>

          <GameBoard boardRows={this.boardRows} boardColumns={this.boardColumns} board={this.state.board} cellClick={this.handleCellClick} />
        </main>

        <footer className="footer">
          <span className="footer__txt">Designed &amp; coded with<span className="color-red"> &#10084; </span>by Tomasz Rybacki </span>
        </footer>
      </Fragment>
    );
  }
}

function copyArray(array) {
  return array.map(innerArray => innerArray.slice());
}

export default GameOfLife;
