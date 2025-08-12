import React from 'react'
import john from './images/Profile.JPG'
import './About.css'
import Resume from './images/Resume.pdf'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} className= 'image-left' alt='john' />
                <div className='col-2'>
                    <h2>HARSH KHUBCHANDANI</h2>
                    <span className='line'></span>
                    
                    <p>
                        Prev SWE Intern @ Meta, ASML, Practo
                        <br />
                        <br />
                        BA CS Student @ USC
                        <br />
                        <br />
                        Fitness Enthusiast | Marathon runner | House music 
                    </p>
                    <a href= {Resume} className='button'target='_blank' >RESUME</a>
                    <p>Relevant links:</p>
                <ul className='socialLinks'>
                    <li>
                        <a
                        target="_blank"
                        rel = "nonreferrer"
                        href='https://www.linkedin.com/in/harsh-khubchandani-19207b238/'
                        >
                        <FontAwesomeIcon icon = {faLinkedinIn}/>
                        </a>
                    </li>
                    <li>
                        <a
                        target="_blank"
                        rel = "nonreferrers"
                        href='https://github.com/harshkhub'
                        >
                        <FontAwesomeIcon icon = {faGithub} />
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default About