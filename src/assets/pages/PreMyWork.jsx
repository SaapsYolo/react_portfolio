import React from 'react'
import PreMyWorkCard from './PreMyWorkCard';
import './PreMyWork.css';


export const PreMyWork = () => {
  return (
    <div className="preMyWork-cardSection">
    <PreMyWorkCard
        tittle="2x"
        description="Grad"
    />
    <PreMyWorkCard
        tittle="100%"
        description="Success Rate"
    />
    <PreMyWorkCard
        tittle="5+"
        description="Projects Done"
    />
    </div>
  )
}
 export default PreMyWork;