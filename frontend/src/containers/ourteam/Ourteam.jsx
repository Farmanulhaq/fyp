import React from 'react'
import './ourteam.css'

const Ourteanm = ({Name, City, Prof, Image, Skills }) => {
  return (
    <>
        <div className="card-container">
            <span className="pro">PRO</span>
            <img className="round" src={Image} alt="user" />
            <h3>{Name}</h3>
            <h6>{City}</h6>
            <p>{Prof}</p>
            <div className="buttons">
                <button className="primary">
                    Message
                </button>
                <button className="primary ghost">
                    Following
                </button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {Skills.map((Skills)=> <li>{Skills}</li>)}
                </ul>
            </div>
        </div>

        
    </>
  )
}

export default Ourteanm