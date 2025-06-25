import React from 'react'
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects () {
  return (

      <div>      
            <div className="projects-container">
                  <ProjectCard
                  image="https://th.bing.com/th/id/OIP.ft_DAm29jSDXPZKT2oASFwHaEo?rs=1&pid=ImgDetMain"
                  name="Project 1"
                  description="This is a description of Project 1."
                  techstack={['React', 'CSS', 'JavaScript']}
                  siteLink="https://example.com"
                  githubLink="https://github.com"
                  />
                  <ProjectCard
                  image="https://th.bing.com/th/id/OIP.ft_DAm29jSDXPZKT2oASFwHaEo?rs=1&pid=ImgDetMain"
                  name="Project 2"
                  description="This is a description of Project 2."
                  techstack={['React', 'CSS', 'JavaScript', 'Firebase']}
                  siteLink="https://example.com"
                  githubLink="https://github.com"
                  />
                  <ProjectCard
                  image="https://th.bing.com/th/id/OIP.ft_DAm29jSDXPZKT2oASFwHaEo?rs=1&pid=ImgDetMain"
                  name="Project 3"
                  description="This is a description of Project 3."
                  techstack={['Html', 'CSS', 'JavaScript', 'SQL']}
                  siteLink="https://example.com"
                  githubLink="https://github.com"
                  />
            </div>

           
    </div>
  )
}

export default Projects;
