import React from 'react';
import PropTypes from 'prop-types';

import BoardCell from './BoardCell.jsx';

function GameBoard(props) {
  const width = props.boardColumns * 16;
  let cellArray = props.board;

  cellArray = cellArray.map((rowItem, rowIndex) => rowItem.map((columnItem, columnIndex) => {
    const cellId = `${rowIndex}_${columnIndex}`;
    const cellClass = (cellArray[rowIndex][columnIndex]) ? 'BoardCell alive' : 'BoardCell dead';

    return (
      <BoardCell
        className={cellClass}
        cellId={cellId}
        key={cellId}
        row={rowIndex}
        column={columnIndex}
        cellClick={props.cellClick}
      />
    );
  }));

  return (
    <div className="GameBoard" style={{ width }}>
      {cellArray}
    </div>
  );
}

GameBoard.propTypes = {
  boardColumns: PropTypes.number.isRequired,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired
};

export default GameBoard;
