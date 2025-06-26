import React from 'react'
import EducationCard from './EducationCard';

import vutIcon from '../../assets/icons/vut-icon.png';

function Education () {
  return (

      <div>      
            <div className="education-container">
                  <EducationCard
                  icon={vutIcon}
                  institution="Vaal University of Technology"
                  qualification="Advanced Diploma in Information Technology"
                  year="2024"
                  majors={['User Experience Design, ', 'Advanced Database Design, ', 'Emerging Technologies']}
                  />
            </div>
            <div className="education-container">
                  <EducationCard
                  icon={vutIcon}
                  institution="Vaal University of Technology"
                  qualification="Diploma in Information Technology"
                  year="2023"
                  majors={['Software Development, ', 'Web Development, ', 'Database Development']}
                  />
            </div>

    </div>
  )
}

export default Education;
