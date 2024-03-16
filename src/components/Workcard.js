import { NavLink } from 'react-router-dom'
import './Workcard.css'
import ASM from './images/ASM.png'
import WorkcardData from './WorkcardData'

const Workcard = (props) => {


    return(
        <div className='project-card'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
            <div className='project-card'>
                <img src={props.imgsrc} alt='image'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>	{props.text}</p>
                <div className='buttons'>
                <a className="button" target="_blank" rel = "nonreferrer" href={props.view}>
                        View
                        </a>
                <a className="button" target="_blank" rel = "nonreferrer" href='https://www.linkedin.com/in/harsh-khubchandani-19207b238/'>
                        Source
                        </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Workcard