import React from 'react';
import { useEffect } from 'react';
import './Styling.css'; // Assuming you have a CSS file for styling
import menuIcon from '../icons/menu.png'; // Importing the menu icon
import closeIcon from '../icons/close.png'; // Importing the close icon

function Navigation () {
    useEffect(() => {
    const menuResponsiveButton = document.getElementById("MenuResponsiveButton");
    const closeResponsiveMenuButton = document.getElementById("CloseResponsiveMenuButton");
    const nav = document.getElementById("Navigation");
    const mobileResponsiveLinks = document.getElementById("MobileResponsiveLinks");
    const home = document.getElementById("Home");
    const bio = document.getElementById("Bio");
    const myWork = document.getElementById("MyWork");
    const educationAndSkills = document.getElementById("EducationAndSkills");
    const mobileResponsiveContactMe = document.getElementById("MobileResponsiveContactMe");

    menuResponsiveButton.addEventListener("click", event =>{
        nav.style.flexDirection = "column";
        mobileResponsiveLinks.style.display = "contents";
        menuResponsiveButton.style.display = "none";
        closeResponsiveMenuButton.style.display = "contents";
        nav.style.transition = ".3s ease-in-out";
        nav.style.height = "100vh";
    });

    closeResponsiveMenuButton.addEventListener("click", event =>{
        closeNavLinks();
    });

    home.addEventListener("click", event =>{
        closeNavLinks();
    });
    bio.addEventListener("click", event =>{
        closeNavLinks();
    });
    myWork.addEventListener("click", event =>{
        closeNavLinks();
    });
    educationAndSkills.addEventListener("click", event =>{
        closeNavLinks();
    });

    mobileResponsiveContactMe.addEventListener("click", event =>{
        closeNavLinks();
    });

    function closeNavLinks(){
        nav.style.flexDirection = "row";
        mobileResponsiveLinks.style.display = "none";
        menuResponsiveButton.style.display = "block";
        closeResponsiveMenuButton.style.display = "none";
        nav.style.transition = ".3s ease-in-out";
        nav.style.height = "auto";
    };

    }, []);

  return (
    <div className="outerNav">
        
    
    <nav id="Navigation">
        <div class="logo">Siya.Dev</div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#MyBio">Bio</a></li>
            <li><a href="#MyWorkSection">My Work</a></li>
            <li><a href="#SkillsAndEducation">Education & Skills</a></li>
        </ul>
        <div class="gradientBorder2">
            <a href="#ContactMeSection" class="contactMeBtn">Contact Me</a>
        </div>
        
        {/* <!-- Mobile responsive --> */}
        <div class="menuResponsive" id="MenuResponsiveButton">
            <img src={menuIcon} alt="Menu" />
        </div>
        <div class="menuResponsive" id="CloseResponsiveMenuButton">
            <img src={closeIcon} alt="Close" />
        </div>
        <ul  id="MobileResponsiveLinks">
            
            <li><a href="#" id="Home">Home</a></li>
            <li><a href="#MyBio" id="Bio">Bio</a></li>
            <li><a href="#MyWorkSection" id="MyWork">My Work</a></li>
            <li><a href="#SkillsAndEducation" id="EducationAndSkills">Education & Skills</a></li>
            <div class="gradientBorder responsive" id="MobileResponsiveContactMe">
                <a href="#ContactMeSection" class="contactMeBtn" id="MobileResponsiveContactMe">Contact Me</a>
            </div>
        </ul>
    </nav>
    </div>
  )
}

export default Navigation;
