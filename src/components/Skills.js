import React from 'react'
import './Skills.css'

const groups = [
    {
        title: 'Languages',
        items: ['Kotlin', 'Swift', 'C++', 'Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'PHP'],
    },
    {
        title: 'Mobile & Platform',
        items: ['Android', 'AOSP', 'iOS', 'Jetpack Compose', 'SwiftUI'],
    },
    {
        title: 'Backend & Infra',
        items: ['Spring Boot', 'Node.js', 'REST', 'PostgreSQL', 'AWS', 'Docker', 'Microservices'],
    },
    {
        title: 'Frontend',
        items: ['React', 'CSS / Sass', 'HTML'],
    },
    {
        title: 'ML & Data',
        items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'NumPy', 'Pandas'],
    },
    {
        title: 'Tooling',
        items: ['Git', 'Buck', 'Gradle', 'Mocha', 'Jest'],
    },
]

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="container">
                <span className="section-label">Toolbox</span>
                <h2 className="section-title">Tech I work with.</h2>
                <p className="section-subtitle">
                    A working subset — picked based on what the problem needs, not what's trending.
                </p>

                <div className="skills-grid">
                    {groups.map((g) => (
                        <div key={g.title} className="skills-group">
                            <h4 className="skills-group-title">{g.title}</h4>
                            <div className="skills-list">
                                {g.items.map((s) => (
                                    <span key={s} className="skill-chip">{s}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
