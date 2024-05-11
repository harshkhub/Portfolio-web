
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import {FaJava, FaAws, FaOffice, FaDocker, FaGraduationCap, FaSuitcase} from 'react-icons/fa'
import Practo from './images/Practo.png'
import ASM from './images/ASM.png'
import Powerweave from './images/powerweave.jpg'
import download from './images/download.png'
import './Experiences.css'
import cs from './images/cs.png'

const Experiences = () => {

    return(
    <div className="experiences-container" id='experiences'>
      <h1>Experiences</h1>
      
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2024-Present"
          iconStyle={{ background: 'black', color: '#fff' }}
          icon={<FaSuitcase/>}
          >
            <img src={ASM}alt="Company"/>
            <h3>ASML</h3>
            <h2>Software engineer Contract Intern | Remote</h2>
            <p>Engineering a web tool for project management that uses microservices and RESTful API principles,  hosted on AWS RDS</p>
            <FaDocker/><FaAws/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2024-Present"
          iconStyle={{ background: 'black', color: '#fff' }}
          icon={<FaSuitcase/>}
          >
            <img src={cs}alt="Company"/>
            <h3>CS@SC summer camps</h3>
            <h2>Teaching assistant for Python | USC</h2>
            <p>Teaching assistant for USC Computer Science coding camps for K-12 students interested in learning the fundamentals of Python</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June 2023-Aug 2023"
        iconStyle={{ background: 'black', color: '#fff' }}
        icon={<FaSuitcase />}
        >
          <img src={ASM}alt="Company"/>
          <h3>ASML</h3>
          <h2>Machine learning Intern | San Diego, CA</h2>
          <p>Machine learning intern for tin droplet scanner team at ASML. Led a team of 5 interns to improve efficiency of Tin droplet scanner and cameras by 5%, analyzed data using TensorFlow for better detection, simulated system upgrades, collaborated on Python code for lithography systems, and conducted meetings to monitor camera performance.</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2022- Jul 2022"
        iconStyle={{ background: 'black', color: '#fff' }}
        icon={<FaSuitcase />}
        >
          <img src={Powerweave} alt='Poweraeve'/>
          <h3>Powerweave</h3>
          <h2>Software engineering Intern | Mumbai, India</h2>
          <p>Developed and managed EWIZcommerce, a B2B e-commerce platform with marketing automation and RESTful APIs. Applied PyTorch for time series RNNs to predict future traffic, utilized Apriori algorithm for understanding and improving returning purchases, and played a key troubleshooting role to address high-priority bugs in the EWIZ platform using debugging tools.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Feb 2022 - Apr 2022"
        iconStyle={{ background: 'black', color: '#fff' }}
        icon={<FaSuitcase />}
        >
          <img src={Practo} alt='Practo'/>
          <h3>Practo</h3>
          <h2>Software engineer Intern | Mumbai, India</h2>
          <p>
Developed a web tool using React for doctor consultations and location-based doctor search as a member of the Practo search teamn, utilized PostgreSQL for secure patient data storage in a healthcare platform, optimized SQL queries for a 15% reduction in execution time, aided in creating concise test cases for functional testing, and implemented parallel testing scripts with MOCHA to decrease testing time by 12%.</p>
        </VerticalTimelineElement>

    
      </VerticalTimeline>
    </div>
  );
}

export default Experiences