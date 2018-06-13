import React, { Fragment } from 'react';

import GameBoard from './GameBoard.jsx';
import GameControls from './GameControls.jsx';
import GameSettings from './GameSettings.jsx';
import GameMenu from './GameMenu.jsx';
import HamburgerMenu from './HamburgerMenu.jsx';


function copyArray(array) {
  return array.map(innerArray => innerArray.slice());
}

function randomChance(rowIndex, colIndex, row, col) {
  if (rowIndex === 0 || colIndex === 0 || rowIndex === row - 1 || colIndex === col - 1) {
    return false;
  }

  const probability = Math.floor(Math.random() * 10);
  return probability <= 2;
}


class GameOfLife extends React.Component {
  constructor(props) {
    super(props);
    this.boardRows = 10;
    this.boardColumns = 20;
    this.gameSpeed = 500;
    this.emptyBoard = Array(this.boardRows).fill(Array(this.boardColumns).fill(false));

    this.state = {
      generation: 0,
      board: this.emptyBoard,
      isActive: false
    };
  }

  componentWillMount() {
    if (window.innerWidth <= 420) {
      this.setState({
        isActive: false
      });
    } else {
      this.setState({
        isActive: true
      });
    }
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
    boardCopy = boardCopy.map((row, rowIndex) => row.map((col, colIndex) => randomChance(rowIndex, colIndex, this.boardRows, this.boardColumns)));
    this.setState({
      board: boardCopy
    });
  }

  handleStopGame = () => {
    clearInterval(this.intervalId);
    this.setState({
      generation: 0,
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
    const currentBoard = this.state.board;
    const futureBoard = copyArray(this.state.board);

    for (let i = 1; i < currentBoard.length - 1; i += 1) {
      for (let j = 1; j < currentBoard[0].length - 1; j += 1) {
        let liveNeighbours = 0;

        if (currentBoard[i][j - 1]) liveNeighbours += 1;
        if (currentBoard[i][j + 1]) liveNeighbours += 1;
        if (currentBoard[i - 1][j]) liveNeighbours += 1;
        if (currentBoard[i + 1][j]) liveNeighbours += 1;

        if (currentBoard[i - 1][j - 1]) liveNeighbours += 1;
        if (currentBoard[i - 1][j + 1]) liveNeighbours += 1;
        if (currentBoard[i + 1][j - 1]) liveNeighbours += 1;
        if (currentBoard[i + 1][j + 1]) liveNeighbours += 1;

        if (liveNeighbours < 2 || liveNeighbours > 3) futureBoard[i][j] = false;
        if (!currentBoard[i][j] && liveNeighbours === 3) futureBoard[i][j] = true;
      }
    }

    this.setState({
      generation: this.state.generation += 1,
      board: futureBoard
    });
  }

  handleNormalSpeed = () => {
    this.gameSpeed = 500;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.gameSpeed);
  }

  handleFastSpeed = () => {
    this.gameSpeed = 250;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.gameSpeed);
  }

  handleNormalSize = () => {
    this.boardRows = 20;
    this.boardColumns = 40;
    this.emptyBoard = Array(this.boardRows).fill(Array(this.boardColumns).fill(false));
    clearInterval(this.intervalId);
    this.setState({
      generation: 0,
      board: this.emptyBoard
    });
  }

  handleSmallSize = () => {
    this.boardRows = 10;
    this.boardColumns = 20;
    this.emptyBoard = Array(this.boardRows).fill(Array(this.boardColumns).fill(false));
    clearInterval(this.intervalId);
    this.setState({
      generation: 0,
      board: this.emptyBoard
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
            <GameControls
              seedRandomCells={this.handleSeedRandomCells}
              stopGame={this.handleStopGame}
              startGame={this.handleStartGame}
              pauseGame={this.handlePauseGame}
            />
            <GameSettings
              normalSpeed={this.handleNormalSpeed}
              isActive={this.state.isActive}
              fastSpeed={this.handleFastSpeed}
              normalSize={this.handleNormalSize}
              smallSize={this.handleSmallSize}
            />
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
