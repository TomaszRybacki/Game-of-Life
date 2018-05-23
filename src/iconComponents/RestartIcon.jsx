import React from 'react';
import PropTypes from 'prop-types';


function RestartIcon(props) {
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
          <path d="M150.005,0C67.164,0,0.001,67.159,0.001,150c0,82.838,67.162,150.003,150.003,150.003S300.002,232.838,300.002,150
            C300.002,67.159,232.844,0,150.005,0z M230.091,172.444c-9.921,37.083-43.801,64.477-83.969,64.477
            c-47.93,0-86.923-38.99-86.923-86.923s38.99-86.92,86.923-86.92c21.906,0,41.931,8.157,57.228,21.579l-13.637,23.623
            c-11-11.487-26.468-18.664-43.594-18.664c-33.294,0-60.38,27.088-60.38,60.38c0,33.294,27.085,60.38,60.38,60.38
            c25.363,0,47.113-15.728,56.038-37.937h-20.765l36.168-62.636l36.166,62.641H230.091z"
          />
        </g>
      </g>
    </svg>
  );
}

RestartIcon.propTypes = {
  className: PropTypes.string.isRequired
};


export default RestartIcon;
