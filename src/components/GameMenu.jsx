import React from 'react';
import PropTypes from 'prop-types';

function GameMenu(props) {
  return (
    <div className="GameMenu">
      {props.children}
    </div>
  );
}

GameMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default GameMenu;
