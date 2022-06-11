import React from 'react'
import { Ourteam } from '../../components'
import {Hassam, Sheheryar, Ashar, Farman} from './import'
import './team.css'

const Team = () => {
  return (
    <div className='proj__team'>
        <div>
            <Ourteam Name="Hassam" City="Karachi" Prof="Full-Stack Blockchain Developer" Image={Hassam} Skills={['HTML/CSS', 'React', 'Nodejs', '.NET MVC', 'Entity Framework', 'SQL Serve', 'MongoDB']}/>
        </div>
        <div>
            <Ourteam Name="Sheheryar" City="Karachi" Prof="MERN Stack Developer" Image={Sheheryar} Skills={['HTML/CSS', 'React', 'Nodejs', 'MongoDB']}/>
        </div>
        <div>
            <Ourteam Name="Ashar" City="Karachi" Prof="Sales Force Developer" Image={Ashar} Skills={['HTML/CSS', 'React', 'Nodejs', '.NET MVC', 'SQL Serve']}/>
        </div>
        <div>
            <Ourteam Name="Farman" City="Karachi" Prof="Embeded System Developer" Image={Farman} Skills={['HTML/CSS', 'React', 'C/C++', 'Arduino', 'Esp32', 'RaspberryPi']}/>
        </div>

    </div>
  )
}

export default Team