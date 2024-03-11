
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import {FaJava, FaAws, FaOffice, FaDocker, FaGraduationCap} from 'react-icons/fa'
import Practo from './images/Practo.png'
import ASM from './images/ASM.png'
import download from './images/download.png'

const Experiences = () => {
    return(
    <div className="experiences-container" id='experiences'>
      <h1>Experiences and Projects</h1>
      
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2024-Present"
          iconStyle={{ background: 'black', color: '#fff' }}
          icon={<FaAws/>}
          >
            <img src={ASM}alt="Company"/>
            <h3>Concept management Web app</h3>
            <p>Engineering a web tool for project management that uses microservices and RESTful API principles,  hosted on AWS RDS</p>
            <FaDocker/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="January 2024-March 2024"
        iconStyle={{ background: 'red', color: '#fff' }}
        icon={<FaGraduationCap />}
        >
          <img src={download}alt="Company"/>
          <h3>USC class scheduler</h3>
          <p>Web app using spring boot xyx...</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - present"
        iconStyle={{ background: 'red', color: '#fff' }}
        icon={<FaJava />}
        >
          <h3>USC class scheduler</h3>
          <p>Web app using spring boot xyx...</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - present"
        iconStyle={{ background: 'red', color: '#fff' }}
        icon={<FaJava />}
        >
          <h3>USC class scheduler</h3>
          <p>Web app using spring boot xyx...</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - present"
        iconStyle={{ background: 'red', color: '#fff' }}
        icon={<FaJava />}
        >
          <h3>USC class scheduler</h3>
          <p>Web app using spring boot xyx...</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - present"
        iconStyle={{ background: 'red', color: '#fff' }}
        icon={<FaJava />}
        >
          <h3>USC class scheduler</h3>
          <p>Web app using spring boot xyx...</p>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
  );
}

export default Experiences