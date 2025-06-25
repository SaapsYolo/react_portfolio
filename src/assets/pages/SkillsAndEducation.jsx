import React from 'react'
import { useEffect } from 'react';
import './Styling.css'; 
import educationImage from '../images/IMG_5752-2.jpg'; // Adjust the path as necessary

function SkillsAndEducation () {
    useEffect(() => {
        const myEducationBtn = document.getElementById("EducationButton");
        const mySkillsBtn = document.getElementById("SkillsButton");
        const educationContent = document.getElementById("Education");
        const skillsContent = document.getElementById("Skills");

        myEducationBtn.addEventListener("click", event =>{
            skillsContent.style.display = "none";
            educationContent.style.display = "block";
            mySkillsBtn.style.color = "#000";
            myEducationBtn.style.color = "#FF5E5E";
            myEducationBtn.style.fontWeight = "800";
            mySkillsBtn.style.fontWeight = "normal";
        });

        mySkillsBtn.addEventListener("click", event =>{
            educationContent.style.display = "none";
            skillsContent.style.display = "block";
            myEducationBtn.style.color = "#000";
            mySkillsBtn.style.color = "#FF5E5E";
            mySkillsBtn.style.fontWeight = "800";
            myEducationBtn.style.fontWeight = "normal";
        });


    });

  return (
    <div>
       
   <div class="moreAbout" id="SkillsAndEducation">

        <div class="navMoreAbout">
            <ul>
                <a  href="#SkillsAndEducation" id="EducationButton" class="EducationButton">Education</a>
                <a href="#SkillsAndEducation" id="SkillsButton" class="SkillsButton">Skills</a>
            </ul>    
        </div>

        <div class="moreAboutContent">
            <div class="educationSection" id="Education">

                {/* <!-- <h3>Education</h3> --> */}
                <div class="circle4"></div>
                <div class="imageAndText">
                    <div><img src={educationImage}  alt=""/></div>
                    <div class="educationText">
                        <h3><img src="Assets/icons/icons8-institution-50.png" alt=""/>Institution:  <span>Vaal University of Technology</span></h3>
                        <h3><img src="Assets/icons/icons8-certificate-50.png" alt=""/>Qualification: <span>Advanced Diploma in Information Technology</span></h3>
                        <h3><img src="Assets/icons/icons8-calendar-50.png" alt=""/>Year: <span>2024</span></h3><br/><br/>
                        <h3><img src="Assets/icons/icons8-institution-50.png" alt=""/>Institution: <span>Vaal University of Technology</span></h3>
                        <h3><img src="Assets/icons/icons8-certificate-50.png" alt=""/>Qualification: <span>Diploma in Information Technology (Software Development)</span></h3>
                        <h3><img src="Assets/icons/icons8-calendar-50.png" alt=""/>Year: <span>2023</span></h3>
                    </div>
                </div>
                
            </div>
        
            <div class="skillsSection" id="Skills">
                <h3>Technical Skills</h3>
                <div class="circle3"></div>
                <ul>
                    <li><img src="Assets/icons/icons8-sql-database-56.png" alt=""/>
                        <div class="progressContainer">
                            <div class="progressBar" style={{ width: '70%' }}>70%</div>
                        </div>
                    </li>
                    <li><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"/></svg>
                        <div class="progressContainer">
                            <div class="progressBar" style={{ width: '60%' }}>60%</div>
                        </div>
                    </li>
                    <li><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 44 44" width="48px" height="48px"><path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"/><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"/><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"/><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"/><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"/><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"/><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"/></g></svg>
                        <div class="progressContainer">
                            <div class="progressBar" style={{ width: '80%' }}>80%</div>
                        </div>
                    </li>
                    <li><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"/><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"/><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"/><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"/><circle cx="32" cy="24" r="7" fill="#29b6f6"/></svg>
                        <div class="progressContainer">
                            <div class="progressBar" style={{ width: '70%' }}>70%</div>
                        </div>
                    </li>
                    <li><img src="Assets/icons/icons8-javascript.gif" alt=""/>
                        <div class="progressContainer">
                            <div class="progressBar" style={{ width: '40%' }}>40%</div>
                        </div>
                    </li>
                    <li><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#00c853" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0c3.355,1.883,13.451,7.551,16.807,9.434 C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867c0,0.762-0.418,1.466-1.097,1.847 c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0c-3.355-1.883-13.451-7.551-16.807-9.434 C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867c0-0.762,0.418-1.466,1.097-1.847 C9.451,10.837,19.549,5.169,22.903,3.286z"/><path fill="#69f0ae" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255c0-3.744,0-15.014,0-18.759 c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38c0.677-0.379,1.594-0.371,2.271,0.008 c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"/><path fill="#fff" d="M24,10c-7.73,0-14,6.27-14,14s6.27,14,14,14s14-6.27,14-14S31.73,10,24,10z M24,31 c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7S27.86,31,24,31z"/><path fill="#00e676" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784c0,3.795-0.032,14.589,0.009,18.384 c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"/><path fill="#fff" d="M34 20H35V28H34zM37 20H38V28H37z"/><path fill="#fff" d="M32 25H40V26H32zM32 22H40V23H32z"/></svg>
                        <div class="progressContainer">
                            <div class="progressBar" style={{ width: '30%' }}>30%</div>
                        </div>
                    </li>
                    <li><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"/><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"/></svg>
                        <div class="progressContainer">
                            <div class="progressBar" style={{ width: '90%' }}>90%</div>
                        </div>
                    </li>
                    <li><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"/><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/></svg>
                        <div class="progressContainer">
                            <div class="progressBar" style={{ width: '90%' }}>90%</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>





    </div>
  )
}
export default SkillsAndEducation;
