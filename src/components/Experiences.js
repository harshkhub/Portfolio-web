import React from 'react'
import './Experiences.css'

const stops = [
    {
        line: 'red',
        bullet: '1',
        company: 'Meta',
        sub: 'Reality Labs Wearables',
        role: 'Software Engineer',
        location: 'New York, NY',
        period: 'JAN 2025 — PRESENT',
        current: true,
        notes: [
            'Shipped 5 complete privacy & identity features across AOSP, Android, and iOS for in-market smart glasses — spanning UX through server-side in Kotlin, Swift, and C++.',
            'Improved account sync success by 2–3% by diagnosing cache errors in device record sync; partnered with XFN connectivity and onboarding to fix the root cause.',
            'Built and shipped a silent push notification system for wearables subscription updates — 100% dispatch success across 543 pushes.',
            'Added account sync support for new device onboarding to the Meta AI app, enabling seamless identity continuity across the glasses ecosystem.',
            'Drove team test coverage from 61.85% → 72.83% with automations and plugins that auto-generate unit tests across the codebase.',
            'Improved team AI productivity by authoring context files, skills, and plugins that boosted code readability for AI tooling and self-verify scores.',
        ],
        transfers: ['Kotlin', 'Swift', 'C++', 'AOSP', 'Android', 'iOS'],
    },
    {
        line: 'red',
        bullet: '2',
        company: 'Meta',
        sub: 'Meta AI App',
        role: 'Software Engineer Intern',
        location: 'New York, NY',
        period: 'MAY 2025 — AUG 2025',
        notes: [
            'Built an internal debugging tool for the Meta AI app login flow (Kotlin, Swift, PHP), with logging and a dashboard to surface diagnostic data.',
            'Partnered cross-functionally to scale adoption and grow data coverage.',
        ],
        transfers: ['Kotlin', 'Swift', 'PHP'],
    },
    {
        line: 'blue',
        bullet: 'A',
        company: 'ASML',
        sub: 'Project management web tool',
        role: 'Software Engineer · Contract Intern',
        location: 'Remote',
        period: 'JAN 2024 — AUG 2024',
        notes: [
            'Engineered a web tool for project management using microservices and RESTful API design, hosted on AWS RDS.',
        ],
        transfers: ['AWS', 'Docker', 'Microservices', 'REST'],
    },
    {
        line: 'green',
        bullet: '6',
        company: 'CS@SC Summer Camps',
        sub: 'USC',
        role: 'Teaching Assistant · Python',
        location: 'Los Angeles, CA',
        period: 'MAY 2024 — PRESENT',
        notes: [
            'TA for USC Computer Science coding camps for K-12 students learning the fundamentals of Python.',
        ],
        transfers: ['Python', 'Teaching'],
    },
    {
        line: 'blue',
        bullet: 'A',
        company: 'ASML',
        sub: 'Tin droplet scanner team',
        role: 'Machine Learning Intern',
        location: 'San Diego, CA',
        period: 'JUN 2023 — AUG 2023',
        notes: [
            'Led a team of 5 interns to improve tin droplet scanner and camera efficiency by 5%.',
            'Analyzed data with TensorFlow for better detection; simulated upgrades and contributed Python code for lithography systems.',
        ],
        transfers: ['TensorFlow', 'Python', 'Computer Vision'],
    },
    {
        line: 'orange',
        bullet: 'F',
        company: 'Powerweave',
        sub: 'EWIZcommerce platform',
        role: 'Software Engineering Intern',
        location: 'Mumbai, India',
        period: 'MAY 2022 — JUL 2022',
        notes: [
            'Built and managed EWIZcommerce — a B2B e-commerce platform with marketing automation and RESTful APIs.',
            'Applied PyTorch time-series RNNs to forecast traffic and used Apriori to improve returning purchases; resolved high-priority bugs in the EWIZ platform.',
        ],
        transfers: ['PyTorch', 'RNN', 'REST'],
    },
    {
        line: 'yellow',
        bullet: 'N',
        company: 'Practo',
        sub: 'Practo Search',
        role: 'Software Engineer Intern',
        location: 'Mumbai, India',
        period: 'FEB 2022 — APR 2022',
        notes: [
            'Built a React tool for doctor consultations and location-based search on the Practo search team.',
            'Optimized SQL queries for a 15% execution-time reduction and ran parallel MOCHA test scripts to cut test time by 12%.',
        ],
        transfers: ['React', 'PostgreSQL', 'Mocha'],
    },
]

const Experiences = () => {
    return (
        <section className="line section" id="experience">
            <div className="container">
                <div className="line-head">
                    <span className="eyebrow">§ 02 — Route map</span>
                    <h2 className="display">
                        The <em>local line</em>, end to end.
                    </h2>
                    <p className="lede">
                        Read this as a route map. Each stop is a place where I shipped
                        something — most recent on top, oldest at the bottom. The colored
                        bullets correspond to MTA conventions only as a wink.
                    </p>
                </div>

                <ol className="route">
                    {stops.map((stop, i) => (
                        <li key={i} className={`stop stop-${stop.line} ${stop.current ? 'is-current' : ''}`}>
                            <div className="stop-rail">
                                <span className="bullet" aria-hidden>
                                    {stop.bullet}
                                </span>
                                {stop.current && (
                                    <span className="you-are-here">
                                        <span className="yah-arrow">→</span> YOU ARE HERE
                                    </span>
                                )}
                            </div>

                            <div className="stop-body">
                                <header className="stop-sign">
                                    <div className="stop-sign-main">
                                        <span className="stop-name">{stop.company}</span>
                                        <span className="stop-sub">{stop.sub}</span>
                                    </div>
                                    <div className="stop-sign-meta">
                                        <span>{stop.period}</span>
                                    </div>
                                </header>

                                <p className="stop-role">
                                    <span className="stop-role-title">{stop.role}</span>
                                    <span className="stop-role-sep">·</span>
                                    <span className="stop-role-loc">{stop.location}</span>
                                </p>

                                <ul className="stop-notes">
                                    {stop.notes.map((n, j) => (
                                        <li key={j}>{n}</li>
                                    ))}
                                </ul>

                                <div className="stop-transfers">
                                    <span className="transfer-label">TRANSFER TO</span>
                                    <ul>
                                        {stop.transfers.map((t) => (
                                            <li key={t}>{t}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}

                    <li className="stop stop-terminal">
                        <div className="stop-rail">
                            <span className="bullet terminal" aria-hidden>◆</span>
                        </div>
                        <div className="stop-body terminal-body">
                            <p className="terminal-text">END OF LINE · 2022</p>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default Experiences
