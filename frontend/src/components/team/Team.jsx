import React from 'react'
import  Ourteam  from '../../containers/ourteam/Ourteam'
import  {Sheheryar,Ashar,Farman,Hassam} from './import'
import './team.css'

const Team = () => {
  return (
    <div >
        <div className='proj__team'>
            <h1>OUR TEAM</h1>
        </div>
        <div className='proj__team'>
        <div>
            <Ourteam Name="Farman" City="Karachi" Prof="Full Stack Developer" Image={Farman} Skills={['HTML/CSS', 'React', 'C/C++', '.NET MVC','.NET CORE','NODEJS']}/>
        </div>
        <div>
            <Ourteam Name="Hassam" City="Karachi" Prof="Full-Stack Blockchain Developer" Image={Hassam} Skills={['HTML/CSS', 'React', 'Nodejs', '.NET MVC', 'Entity Framework', 'SQL Serve', 'MongoDB']}/>
        </div>
        <div>
            <Ourteam Name="Sheheryar" City="Karachi" Prof="MERN Stack Developer" Image={Sheheryar} Skills={['HTML/CSS', 'React', 'Nodejs', 'MongoDB']}/>
        </div>
        <div>
            <Ourteam Name="Ashar" class="ashar" City="Karachi" Prof="Sales Force Developer" Image={Ashar} Skills={['HTML/CSS', 'React', 'Nodejs', '.NET MVC', 'SQL Serve']}/>
        </div>
        </div>

    </div>
  )
}

export default Team