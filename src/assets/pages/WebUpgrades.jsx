import React, { useState, useEffect } from 'react'
import './WebUpgrades.css';

function WebUpgrades () {
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        setShowPopup(true);
    },[]);


    function closePopUp() {
        setShowPopup(false);
    }

    if (!showPopup) return null;
        
  return (
    <div id="pop-up" className="webupgrades-popup-overlay">
        <div class="webupgrades-popup">
            <button class="webupgrades-close-btn" onClick={closePopUp}>x</button>
            <h2>New and Improved web alert!</h2>
            <p>This is a new website. There will be some regular upgrades</p>
            <button class="webupgrades-ok-btn" onClick={closePopUp}>Got it!</button>
        </div>
    </div>
  )
}
export default WebUpgrades;