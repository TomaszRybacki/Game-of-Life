import React, { Fragment } from 'react';

import GameBoard from './GameBoard.jsx';
import GameControls from './GameControls.jsx';
import GameSettings from './GameSettings.jsx';
import GameMenu from './GameMenu.jsx';
import HamburgerMenu from './HamburgerMenu.jsx';


function copyArray(array) {
  return array.map(innerArray => innerArray.slice());
}

function randomChance() {
  const probability = Math.floor(Math.random() * 10);
  return probability <= 2;
}


class GameOfLife extends React.Component {
  constructor(props) {
    super(props);
    this.boardRows = 20;
    this.boardColumns = 40;
    this.gameSpeed = 500;
    this.emptyBoard = Array(this.boardRows).fill(Array(this.boardColumns).fill(false));

    this.state = {
      generation: 0,
      board: this.emptyBoard
    };
  }

  handleCellClick = (row, column) => {
    const boardCopy = copyArray(this.state.board);
    boardCopy[row][column] = !boardCopy[row][column];
    this.setState({
      board: boardCopy
    });
  }

  handleSeedRandomCells = () => {
    let boardCopy = copyArray(this.state.board);
    boardCopy = boardCopy.map(row => row.map(() => randomChance()));
    this.setState({
      board: boardCopy
    });
  }

  handleStopGame = () => {
    clearInterval(this.intervalId);
    this.setState({
      board: this.emptyBoard
    });
  }

  handleStartGame = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.gameSpeed);
  }

  handlePauseGame = () => {
    clearInterval(this.intervalId);
  }

  play = () => {
    // let currentBoard = this.state.board;
    // let futureBoard = copyArray(this.state.board);
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
            <GameControls
              seedRandomCells={this.handleSeedRandomCells}
              stopGame={this.handleStopGame}
              startGame={this.handleStartGame}
              pauseGame={this.handlePauseGame}
            />
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

export default GameOfLife;
