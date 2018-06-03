import React from 'react';
import PropTypes from 'prop-types';

import BoardCell from './BoardCell.jsx';

class GameBoard extends React.Component {
  static propTypes = {
    boardColumns: PropTypes.number.isRequired,
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired
  }

  render() {
    const width = this.props.boardColumns * 16;
    let cellArray = [...this.props.board];

    cellArray = cellArray.map((rowItem, rowIndex) => rowItem.map((columnItem, columnIndex) => {
      const cellId = `${rowIndex}_${columnIndex}`;
      const cellClass = (this.props.board[rowIndex][columnIndex]) ? 'BoardCell alive' : 'BoardCell dead';

      return (
        <BoardCell
          className={cellClass}
          cellId={cellId}
          key={cellId}
          row={rowIndex}
          column={columnIndex}
        />
      );
    }));

    return (
      <div className="GameBoard" style={{ width }}>
        {cellArray}
      </div>
    );
  }
}

export default GameBoard;
