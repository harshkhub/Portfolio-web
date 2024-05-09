import { NavLink } from 'react-router-dom'
import './Workcard.css'
import WorkcardData from './WorkcardData'
import { useRef, useEffect } from 'react'
import { useState } from 'react'
import React from 'react'

const Workcard = (props) => {

    console.log( "Logging private status: " +  props.privateCode);



    return(
            <div className='project-card'>
                <img src={props.imgsrc} alt='image'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>	{props.text}</p>
                    {props.privateCode ? (
                <p className="button" target="_blank" rel="noreferrer">
                    Private code, please message me for viewing rights
                </p>
            ): 
               ( <div className='buttons'><a className="button" target="_blank" rel = "nonreferrer" href={props.view}>
                        View
                        </a>
                <a className="button" target="_blank" rel = "nonreferrer" href={props.source}>
                        Source
                        </a> </div>)}
                </div>
            </div>
    )
}

export default Workcard