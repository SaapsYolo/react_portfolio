import React from 'react';
import './ProjectCard.css'; 

const ProjectCard = ({image, name, description, techstack, siteLink, githubLink}) => {
  return (
    <div className='project-card'>
        <img src={image} alt={name} className='project-image' />
        <div className="project-content">
            <h3><strong>Name: </strong>{name}</h3>
            <p><strong>Description: </strong> {description}</p><br />
            <div className="tech-stack">
                {
                    techstack.map(
                        (tech, index)=>(
                            <span key={index} className="tech-item">{tech}</span>
                        )
                    )
                }
            </div>
            <div className="project_buttons">
                <a href={siteLink} target='_blank' rel="noopener noreferrer" className='btn-site-link'>View Full Site</a>
                <a href={githubLink} target='_blank' rel="noopener noreferrer" className='btn-github-link'>View GitHub</a>
            </div>
        </div>
    </div>
  )
}


export default ProjectCard;
