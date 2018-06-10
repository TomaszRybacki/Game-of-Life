import React from 'react';
import PropTypes from 'prop-types';

function BoardCell(props) {
  return (
    <div
      className={props.className}
      id={props.cellId}
      onClick={() => props.cellClick(props.row, props.column)}
    />
  );
}

BoardCell.propTypes = {
  className: PropTypes.string.isRequired,
  cellId: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  cellClick: PropTypes.func.isRequired
};

export default BoardCell;
