import React from 'react'
import ProjectCard from './ProjectCard';
import './Projects.css';
import potfolio from '../images/potfolio page.PNG';
import bigOProperties from '../images/BigO Properties.PNG';
import yummy from '../images/yummy.png';

function Projects () {
  return (

      <div>      
            <div className="projects-container">
                  <ProjectCard
                  image={yummy}
                  name="YummyCuisine (Restaurant App)"
                  description="This project is a restaurant app that allows users to view the menu, place orders.
                  I built this website during my acamic year at the Vaal University of Technology.
                  It is built on several technologies, and is hosted on a local server."
                  techstack={['HTML', 'CSS', 'SQL', 'PHP']}
                  siteLink="https://example.com"
                  githubLink="https://github.com/SaapsYolo/YummyCruisin"
                  />
                  <ProjectCard
                  image={potfolio}
                  name="Potfolio Website"
                  description="This is my potfolio website where I showcase my coding abilities and the creative site of myself.
                  It is built using React, CSS, and JavaScript, and is hosted on Netlify."
                  techstack={['React', 'CSS', 'JavaScript']}
                  siteLink="#"
                  githubLink="https://github.com/SaapsYolo/Portfolio3"
                  />
                  <ProjectCard
                  image={bigOProperties}
                  name="Property Rental Website"
                  description="This is a property rental website that allows users to view available properties,
                  contact the owner, and view property details.
                  Hosted Netify."
                  techstack={['Html', 'CSS']}
                  siteLink="https://example.com"
                  githubLink="https://github.com"
                  />
            </div>

           
    </div>
  )
}

export default Projects;
