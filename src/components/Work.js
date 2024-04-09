import Workcard from "./Workcard"
import WorkcardData from "./WorkcardData"
import course from './images/course.png'
import './Workcard.css'
import React from "react"
import { NavLink } from "react-router-dom"


const Work = () => {
    return(
    <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {WorkcardData.map((val,ind) => {
                return(
                    <Workcard
                    key={ind}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}
                    source = {val.source}/>
                )
            })}
        </div>
    </div>
    )

}

export default Work