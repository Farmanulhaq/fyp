import React from 'react'
import { Feature } from '../../components'
import "./about.css"
const About = () => {
  return (
    <div className='about_vehicify section_margin' id='abt_vehicify'>
      <div className='about_vehicify-feature'>
        <Feature title="What is Vehicify" text="Vehicify provides a trusted way of verification of your precious vehicle's Auction Papers and a complete and trustable inspection service."/>
      </div>
      <div className='abput_vehicify-heading'>
        <h1 className='gradient_txt'>Technology is beyond your imagination</h1>
      </div>
      <div className='about_vehicify-container'>
        <Feature title="Support" text=""/>
        <Feature title="Knowledge" text=""/>
        <Feature title="Motive" text=""/>
      </div>
    </div>
  )
}

export default About