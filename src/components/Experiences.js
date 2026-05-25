import React from 'react'
import Practo from './images/Practo.png'
import ASM from './images/ASM.png'
import meta from './images/metanew.png'
import Powerweave from './images/powerweave.jpg'
import cs from './images/cs.png'
import './Experiences.css'

const experiences = [
    {
        company: 'Meta',
        logo: meta,
        role: 'Software Engineer · Reality Labs Wearables',
        location: 'New York, NY',
        date: 'Jan 2025 — Present',
        current: true,
        highlight: true,
        tags: ['Kotlin', 'Swift', 'C++', 'AOSP', 'Android', 'iOS'],
        bullets: [
            'Shipped 5 complete privacy & identity features across AOSP, Android, and iOS for in-market smart glasses — spanning UX through server-side in Kotlin, Swift, and C++.',
            'Improved account sync success rate by 2–3% by diagnosing and resolving cache errors in device record sync; collaborated with XFN connectivity and onboarding teams to trace and fix root cause.',
            'Built and shipped a silent push notification system for wearables subscription updates, achieving 100% server dispatch success across 543 pushes.',
            'Added account sync support for new device onboarding to the Meta AI app, enabling seamless identity continuity across the glasses ecosystem.',
            'Drove team test coverage from 61.85% → 72.83% by building automations and plugins that auto-generate unit tests across the codebase.',
            'Boosted team AI productivity by creating context files, skills, and plugins that improved code readability for AI tooling and raised AI self-verify scores.',
        ],
    },
    {
        company: 'Meta',
        logo: meta,
        role: 'Software Engineer Intern',
        location: 'New York, NY',
        date: 'May 2025 — Aug 2025',
        tags: ['Kotlin', 'Swift', 'PHP'],
        bullets: [
            'Built an internal debugging tool for the Meta AI app login flow (Kotlin, Swift, PHP), with logging and dashboard capabilities to surface diagnostic data.',
            'Partnered with cross-functional teams to scale adoption and enhance data coverage.',
        ],
    },
    {
        company: 'ASML',
        logo: ASM,
        role: 'Software Engineer Contract Intern',
        location: 'Remote',
        date: 'Jan 2024 — Aug 2024',
        tags: ['AWS', 'Docker', 'Microservices', 'REST'],
        bullets: [
            'Engineered a web tool for project management using microservices and RESTful API principles, hosted on AWS RDS.',
        ],
    },
    {
        company: 'CS@SC Summer Camps',
        logo: cs,
        role: 'Teaching Assistant · Python',
        location: 'USC',
        date: 'May 2024 — Present',
        tags: ['Python', 'Teaching'],
        bullets: [
            'Teaching assistant for USC Computer Science coding camps for K-12 students learning the fundamentals of Python.',
        ],
    },
    {
        company: 'ASML',
        logo: ASM,
        role: 'Machine Learning Intern',
        location: 'San Diego, CA',
        date: 'Jun 2023 — Aug 2023',
        tags: ['TensorFlow', 'Python', 'Computer Vision'],
        bullets: [
            'Led a team of 5 interns to improve efficiency of the tin droplet scanner and cameras by 5%.',
            'Analyzed data using TensorFlow for better detection, simulated system upgrades, and collaborated on Python code for lithography systems.',
        ],
    },
    {
        company: 'Powerweave',
        logo: Powerweave,
        role: 'Software Engineering Intern',
        location: 'Mumbai, India',
        date: 'May 2022 — Jul 2022',
        tags: ['PyTorch', 'RNN', 'REST'],
        bullets: [
            'Developed and managed EWIZcommerce, a B2B e-commerce platform with marketing automation and RESTful APIs.',
            'Applied PyTorch time series RNNs to predict future traffic and used Apriori to improve returning purchases; addressed high-priority bugs in the EWIZ platform.',
        ],
    },
    {
        company: 'Practo',
        logo: Practo,
        role: 'Software Engineer Intern',
        location: 'Mumbai, India',
        date: 'Feb 2022 — Apr 2022',
        tags: ['React', 'PostgreSQL', 'Mocha'],
        bullets: [
            'Built a React web tool for doctor consultations and location-based search on the Practo search team.',
            'Optimized SQL queries for a 15% execution-time reduction and implemented parallel MOCHA test scripts to cut test time by 12%.',
        ],
    },
]

const Experiences = () => {
    return (
        <section className="experience section" id="experience">
            <div className="container">
                <span className="section-label">Experience</span>
                <h2 className="section-title">Where I've shipped.</h2>
                <p className="section-subtitle">
                    From smart glasses at Meta to lithography ML at ASML — a track record of
                    shipping production systems across the stack.
                </p>

                <div className="timeline">
                    {experiences.map((exp, i) => (
                        <article
                            key={i}
                            className={`exp-card ${exp.highlight ? 'highlight' : ''}`}
                        >
                            <div className="exp-card-header">
                                <div className="exp-logo">
                                    <img src={exp.logo} alt={exp.company} />
                                </div>
                                <div className="exp-heading">
                                    <div className="exp-company-row">
                                        <h3 className="exp-company">{exp.company}</h3>
                                        {exp.current && <span className="exp-badge">Current</span>}
                                    </div>
                                    <p className="exp-role">{exp.role}</p>
                                    <p className="exp-meta">
                                        <span>{exp.location}</span>
                                        <span className="exp-dot">·</span>
                                        <span>{exp.date}</span>
                                    </p>
                                </div>
                            </div>

                            <ul className="exp-bullets">
                                {exp.bullets.map((b, j) => (
                                    <li key={j}>{b}</li>
                                ))}
                            </ul>

                            {exp.tags && (
                                <div className="exp-tags">
                                    {exp.tags.map((t) => (
                                        <span key={t} className="tag">{t}</span>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experiences
