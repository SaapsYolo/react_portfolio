import React from 'react'
import scrollDownIcon from '../icons/scroll-down-icon.png';
import './ScrollDownIcon.css';

function ScrollDown ()  {
  return (
    <div className="scrollDownSection" id="ScrollDownSection">
    <div class="scrollDownIcon">
        <img src={scrollDownIcon} alt="Scroll Down"  />
    </div>
    </div>
  )
}
export default ScrollDown;
