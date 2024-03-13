
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import {FaJava, FaAws, FaOffice, FaDocker, FaGraduationCap, FaProjectDiagram} from 'react-icons/fa'
import Practo from './images/Practo.png'
import ASM from './images/ASM.png'
import Powerweave from './images/powerweave.jpg'
import download from './images/download.png'
import './Experiences.css'

const Experiences = () => {
    return(
    <div className="experiences-container" id='experiences'>
      <h1>Experiences</h1>
      
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2024-Present"
          iconStyle={{ background: 'black', color: '#fff' }}
          icon={<FaAws/>}
          >
            <img src={ASM}alt="Company"/>
            <h3>ASML</h3>
            <h2>Software engineer Contract Intern</h2>
            <p>Engineering a web tool for project management that uses microservices and RESTful API principles,  hosted on AWS RDS</p>
            <FaDocker/><FaAws/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June 2023-August 2023"
        iconStyle={{ background: 'black', color: '#fff' }}
        icon={<FaGraduationCap />}
        >
          <img src={ASM}alt="Company"/>
          <h3>ASML</h3>
          <h2>Machine learning Intern</h2>
          <p>Web app using spring boot xyx...</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - present"
        iconStyle={{ background: 'red', color: '#fff' }}
        icon={<FaJava />}
        >
          <img src={Powerweave} alt='Poweraeve'/>
          <h3>Powerweave</h3>
          <h2>Software engineering Intern</h2>
          <p>Web app using spring boot xyx...</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - present"
        iconStyle={{ background: 'red', color: '#fff' }}
        icon={<FaJava />}
        >
          <img src={Practo} alt='Practo'/>
          <h3>Practo</h3>
          <h2>Software engineer Intern</h2>
          <p>Web app using spring boot xyx...</p>
        </VerticalTimelineElement>

    
      </VerticalTimeline>
    </div>
  );
}

export default Experiences