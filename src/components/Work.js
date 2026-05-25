import React from 'react'
import WorkcardData from './WorkcardData'
import Workcard from './Workcard'
import './Workcard.css'

const Work = () => {
    return (
        <section className="work section" id="projects">
            <div className="container">
                <span className="section-label">Selected Work</span>
                <h2 className="section-title">Projects.</h2>
                <p className="section-subtitle">
                    A mix of fullstack systems, ML experiments, and infra side-quests built
                    during my studies and internships.
                </p>

                <div className="project-grid">
                    {WorkcardData.map((val, ind) => (
                        <Workcard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            source={val.source}
                            privateCode={val.privateCode}
                            tags={val.tags}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work
