import React from 'react';
import './Styling.css'; // Assuming you have a CSS file for styling

function Navigation () {
  return (
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
            {/* <img src="Assets/icons/icons8-menu.svg" alt=""> */}
        </div>
        <div class="menuResponsive" id="CloseResponsiveMenuButton">
            {/* <img src="Assets/icons/icons8-close.svg" alt=""> */}
        </div>
        <ul  id="MobileResponsiveLinks">
            
            <li><a href="#" id="Home">Home</a></li>
            <li><a href="#MyBio" id="Bio">Bio</a></li>
            <li><a href="#MyWorkSection" id="MyWork">My Work</a></li>
            <li><a href="#SkillsAndEducation" id="EducationAndSkills">Education & Skills</a></li>
            <div class="gradientBorder" id="MobileResponsiveContactMe">
                <a href="#ContactMeSection" class="contactMeBtn" id="MobileResponsiveContactMe">Contact Me</a>
            </div>
        </ul>
    </nav>
    
  )
}

export default Navigation;
