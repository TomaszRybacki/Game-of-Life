import React from 'react';
import PropTypes from 'prop-types';

function PauseIcon(props) {
  return (
    <svg
      version="1.1"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="56px"
      height="56px"
      viewBox="0 0 300.003 300.003"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path d="M150.001,0c-82.838,0-150,67.159-150,150c0,82.838,67.162,150.003,150,150.003c82.843,0,150-67.165,150-150.003
            C300.001,67.159,232.846,0,150.001,0z M134.41,194.538c0,9.498-7.7,17.198-17.198,17.198s-17.198-7.7-17.198-17.198V105.46
            c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z M198.955,194.538c0,9.498-7.701,17.198-17.198,17.198
            c-9.498,0-17.198-7.7-17.198-17.198V105.46c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z"
          />
        </g>
      </g>
    </svg>
  );
}

PauseIcon.propTypes = {
  className: PropTypes.string.isRequired
};

export default PauseIcon;
