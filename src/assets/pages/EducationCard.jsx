import React from 'react';
import './EducationCard.css'; 


const EducationCard = ({icon, institution, qualification, year, majors}) => {
  return (
    <div className='educationCard'>
        <img src={icon} alt={institution} className='education-Icon' style={{ marginLeft: '-.3rem', width: 'auto', height: '50px', padding: '5px' }} />
        <div className="education-content">
            <h3>Institution: {institution}</h3>
            <p>Qualification: {qualification}</p>
            <p>Year: {year}</p><br />
            <div className="majors">
                {
                    majors.map(
                        (major, index)=>(
                            <span key={index} className="major-item">{major}</span>
                        )
                    )
                }
            </div>
            
        </div><br />
    </div>
  )
}


export default EducationCard;
