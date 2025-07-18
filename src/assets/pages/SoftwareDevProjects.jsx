import React from 'react'
import ProjectCard from './ProjectCard';
import './Projects.css';
import potfolio from '../images/potfolio page.PNG';
import bigOProperties from '../images/BigO Properties.PNG';
import yummy from '../images/yummy.png';
import crudBackground from '../images/7100345.jpg'
import quiz from '../images/quiz.png';

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
                  <ProjectCard
                  image={crudBackground}
                  name="Waste Management System (back-end)"
                  description="This is a waste management system that allows users to manage waste collection and disposal.
                  It is a CRUD application with a RESTful API build. Tested using Postman. Currently working on the front-end, and hosting."
                  techstack={['Java', 'Springboot', 'H2 Database']}
                  siteLink="https://example.com"
                  githubLink="https://github.com"
                  />
                  <ProjectCard
                  image={quiz}
                  name="Are You Smarter Than A 5th Grader Quiz App"
                  description="This a fun game to play, whether on desktop or mobile, to kill boredom and tease your brain. App is hosted on Netlify."
                  techstack={['Javascript', 'React', 'CSS']}
                  siteLink="https://saapsquiz.netlify.app/"
                  githubLink="https://github.com/SaapsYolo/smarter-than"
                  />
            </div>

           
    </div>
  )
}

export default Projects;
