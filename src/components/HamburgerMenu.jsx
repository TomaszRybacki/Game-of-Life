import React from 'react';

function HamburgerMenu(props) {
  return (
    <button
      className="hamburger hamburger--collapse"
      onClick={() => {
        document.querySelector('.hamburger').classList.toggle('is-active');
        document.querySelector('.GameMenu').classList.toggle('GameMenu--on');
      }}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner" />
      </div>
    </button>
  );
}

export default HamburgerMenu;
