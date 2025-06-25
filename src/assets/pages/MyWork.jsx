import React from 'react'
import { useEffect } from 'react';
import './Styling.css';
import Projects from './Projects';

function MyWork () {
    useEffect(() => {
    const myUiUxBtn = document.getElementById("UiUxBtn");
    const mySoftwareDevBtn = document.getElementById("SoftwareDevBtn");
    const uiUxContent = document.getElementById("UiUxContent");
    const softwareDevContent = document.getElementById("SoftwareDevContent");

    myUiUxBtn.addEventListener("click", event =>{
    softwareDevContent.style.display = "none";
    uiUxContent.style.display = "grid";
    mySoftwareDevBtn.style.color = "#000";
    mySoftwareDevBtn.style.transform = "scale(1.05)";
    mySoftwareDevBtn.style.transition = ".3s ease-in-out";

    myUiUxBtn.style.color = "#FF5E5E";
    myUiUxBtn.style.fontWeight = "800";
    mySoftwareDevBtn.style.fontWeight = "normal";

    //hover effect
    mySoftwareDevBtn.classList.add("hoverEffect");
    myUiUxBtn.classList.remove("hoverEffect");

    });

    mySoftwareDevBtn.addEventListener("click", event =>{
    uiUxContent.style.display = "none";
    softwareDevContent.style.display = "grid";
    myUiUxBtn.style.color = "#000";
    mySoftwareDevBtn.style.color = "#FF5E5E";
    mySoftwareDevBtn.style.fontWeight = "800";
    myUiUxBtn.style.fontWeight = "normal";

    });

});

  return (
    <div>
        <div class="myWorkSection" id="MyWorkSection">
        <div class="topSectionWork">
            <h3>My Work</h3>
        </div>
        <div class="bottomSectionWork">
            
            <div class="leftSectionWork">
                <div class="uiUxDesign">
                    <a href="#MyWorkSection" id="UiUxBtn">Web & App Designs (UI/UX)</a>
                    
                </div>
        
                <div class="softwareDevelopment">
                    <a href="#MyWorkSection" id="SoftwareDevBtn">Software Development</a>
               
                </div>
            </div>


            <div class="rightSectionWork">
                <div class="designs" id="UiUxContent">
                    <Projects />
                </div>
        
                <div class="designs" id="SoftwareDevContent">
                   <Projects />
                </div>
               
            </div>
    
        </div>       
    </div>
    </div>
  )
}
export default MyWork;
