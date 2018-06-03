import React from 'react';
import PropTypes from 'prop-types';

function BoardCell(props) {
  return (
    <div
      className={props.className}
      id={props.cellId}
    />
  );
}

BoardCell.propTypes = {
  className: PropTypes.string.isRequired,
  cellId: PropTypes.string.isRequired
};

export default BoardCell;
