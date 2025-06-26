import React from 'react';
import './ProjectCard.css'; 
import siteIcon from '../icons/arrow_outward.png';

const ProjectCard = ({image, name, description, techstack, siteLink, githubLink}) => {
  return (
    <div className='project-card'>
        <img src={image} alt={name} className='project-image' />
        <div className="project-content">
            <h3 style={{color: '#000'}}>{name}</h3>
            <p style={{color: '#555'}}>{description} </p><br />
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
                <a href={githubLink} target='_blank' rel="noopener noreferrer" className='btn-github-link'>View GitHub</a>
                <a href={siteLink} target='_blank' rel="noopener noreferrer" className='btn-site-link'>View Full Site <img src={siteIcon} alt="" style={{height: '20px', width: '20px'}} /></a>
            </div>
        </div>
    </div>
  )
}


export default ProjectCard;
