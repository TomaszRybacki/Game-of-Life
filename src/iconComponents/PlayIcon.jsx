import React from 'react';
import PropTypes from 'prop-types';


function PlayIcon(props) {
  return (
    <svg
      version="1.1"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="56px"
      height="56px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M344.48,269.57l-128,80
        c-2.59,1.617-5.535,2.43-8.48,2.43c-2.668,0-5.34-0.664-7.758-2.008C195.156,347.172,192,341.82,192,336V176
        c0-5.82,3.156-11.172,8.242-13.992c5.086-2.836,11.305-2.664,16.238,0.422l128,80c4.676,2.93,7.52,8.055,7.52,13.57
        S349.156,266.641,344.48,269.57z"
      />
    </svg>
  );
}

PlayIcon.propTypes = {
  className: PropTypes.string.isRequired
};


export default PlayIcon;
