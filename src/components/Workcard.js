import { NavLink } from 'react-router-dom'
import './Workcard.css'
import ASM from './images/ASM.png'
import course from './images/course.png'
import WorkcardData from './WorkcardData'
import { useRef, useEffect } from 'react'
import React from 'react'

const Workcard = (props) => {




    return(
            <div className='project-card'>
                <img src={props.imgsrc} alt='image'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>	{props.text}</p>
                <div className='buttons'>
                <a className="button" target="_blank" rel = "nonreferrer" href={props.view}>
                        View
                        </a>
                <a className="button" target="_blank" rel = "nonreferrer" href={props.source}>
                        Source
                        </a>
                </div>
                </div>
            </div>
    )
}

export default Workcard