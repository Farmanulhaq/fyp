import React from 'react'
import "./brand.css"
import { Toyota, Honda, Suzuki, Lexus, Nissan } from './imports.js'
const Brand = () => {
  return (
    <div className='proj__brand section__padding'>
      <div>
        <h1>We Are Supported By</h1>
      </div>
      <div>
        <img src={Toyota} alt="Toyota"/>
      </div>
      <div>
        <img src={Lexus} alt="Honda"/>
      </div>
      <div>
        <img src={Honda} alt="Honda"/>
      </div>
      <div>
        <img src={Suzuki} alt="Suzuki"/>
      </div>
      <div>
        <img src={Nissan} alt="Honda"/>
      </div>
    </div>
    
    

  )
}

export default Brand