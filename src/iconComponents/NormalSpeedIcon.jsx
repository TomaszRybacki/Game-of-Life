import React from 'react';
import PropTypes from 'prop-types';

function NormalSpeedIcon(props) {
  return (
    <svg
      version="1.1"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="56px"
      height="56px"
      viewBox="0 0 476.737 476.737"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <g>
            <path d="M238.369,0C106.726,0,0,106.726,0,238.369c0,131.675,106.726,238.369,238.369,238.369
              c131.675,0,238.369-106.694,238.369-238.369C476.737,106.726,370.043,0,238.369,0z M352.722,289.221
              c-6.198,6.198-16.273,6.198-22.47,0l-91.883-91.883l-91.883,91.883c-6.198,6.198-16.273,6.198-22.47,0
              c-6.198-6.166-6.198-16.273,0-22.47L227.086,163.68c3.115-3.115,7.183-4.64,11.283-4.64s8.168,1.526,11.283,4.64L352.722,266.75
              C358.92,272.948,358.92,282.991,352.722,289.221z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

NormalSpeedIcon.propTypes = {
  className: PropTypes.string.isRequired
};

export default NormalSpeedIcon;
