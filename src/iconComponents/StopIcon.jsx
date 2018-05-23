import React from 'react';
import PropTypes from 'prop-types';

function StopIcon(props) {
  return (
    <svg
      version="1.1"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="56px"
      height="56px"
      viewBox="0 0 508.52 508.52"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <g>
            <path d="M254.26,0C113.845,0,0,113.845,0,254.26s113.845,254.26,254.26,254.26
              s254.26-113.845,254.26-254.26S394.675,0,254.26,0z M349.607,317.825c0,17.544-14.239,31.783-31.783,31.783h-127.13
              c-17.544,0-31.782-14.239-31.782-31.783v-127.13c0-17.544,14.239-31.782,31.782-31.782h127.13
              c17.544,0,31.783,14.239,31.783,31.782V317.825z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

StopIcon.propTypes = {
  className: PropTypes.string.isRequired
};

export default StopIcon;
