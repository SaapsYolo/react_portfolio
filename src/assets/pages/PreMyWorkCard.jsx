import React from 'react'
import './PreMyWork.css';
function PreMyWork ({tittle, description}) {
  return (
    <div className="preMyWork-card">
        <div className="preMyWork-content">
            <h2 className="preMyWork-title">{tittle}</h2>
            <p className="preMyWork-description">{description}</p>  
        </div>
    </div>
  )
}
export default PreMyWork;
