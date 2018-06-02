import React, { Fragment } from 'react';

function GameMenu(props) {
  return (
    <div className="GameMenu">
      {props.children}
    </div>
  );
}

export default GameMenu;
