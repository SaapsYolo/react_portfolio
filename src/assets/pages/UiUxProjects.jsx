import React from 'react'
import ProjectCard from './ProjectCard';
import './Projects.css';
import earful from '../images/earful desktop.PNG';
import chillplek from '../images/Chill Plek Design mobile mokups.jpg';

function Projects () {
  return (

      <div>      
            <div className="projects-container">
                  <ProjectCard
                  image={earful}
                  name="Earful (Headphone E-commerce)"
                  description="An e-commerce web design for headphones, earpods, and portable speakers, designed to provide a seamless shopping experience with a focus on user-friendly navigation and aesthetic appeal."
                  techstack={['Figma']}
                  siteLink="https://example.com"
                  githubLink="https://github.com"
                  />
                  <ProjectCard
                  image={chillplek}
                  name="ChillPlek (Reastaurant App)"
                  description="A mobile app design for a restaurant, featuring a user-friendly interface that allows customers to easily browse the menu, and place orders, enhancing the overall dining experience."
                  techstack={['Figma']}
                  siteLink="https://example.com"
                  githubLink="https://github.com"
                  />
                  {/* <ProjectCard
                  image="https://th.bing.com/th/id/OIP.ft_DAm29jSDXPZKT2oASFwHaEo?rs=1&pid=ImgDetMain"
                  name="Project 3"
                  description="This is a description of Project 3."
                  techstack={['Photoshop']}
                  siteLink="https://example.com"
                  githubLink="https://github.com"
                  /> */}
            </div>

           
    </div>
  )
}

export default Projects;
