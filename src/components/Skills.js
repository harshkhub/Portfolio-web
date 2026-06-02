import React from 'react'
import './Skills.css'

const notes = [
    {
        glyph: '⊕',
        title: 'Lifting',
        body: 'Four days a week, mostly compounds. Squat day is sacred. Currently chasing a 2× bodyweight deadlift.',
        meta: 'PR · DL 405',
    },
    {
        glyph: '↻',
        title: 'Running',
        body: 'Long Sunday runs through Central Park or along the Hudson. One full marathon down — already plotting the next.',
        meta: '26.2 · DONE',
    },
    {
        glyph: '◬',
        title: 'Sun-court games',
        body: 'Pickleball, padel, spikeball — whatever moves, anywhere with sun. Best with friends and very little water.',
        meta: 'WEEKEND OPS',
    },
    {
        glyph: '◉',
        title: 'House music',
        body: 'Deep, melodic, sometimes a little tech. Sets keep me on long runs and long workdays; raves keep me honest.',
        meta: 'BPM · 122–128',
    },
]

const Skills = () => {
    return (
        <section className="notes section" id="notes">
            <div className="container">
                <div className="notes-head">
                    <span className="eyebrow">§ 04 — Field notes</span>
                    <h2 className="display">
                        Things I do <em>when the IDE is closed.</em>
                    </h2>
                </div>

                <div className="notes-grid">
                    <div className="notes-list">
                        {notes.map((n, i) => (
                            <article key={n.title} className="note">
                                <span className="note-num">No. 0{i + 1}</span>
                                <div className="note-body">
                                    <header className="note-head">
                                        <span className="note-glyph" aria-hidden>{n.glyph}</span>
                                        <h3 className="note-title">{n.title}</h3>
                                        <span className="note-meta">{n.meta}</span>
                                    </header>
                                    <p>{n.body}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <aside className="spinning">
                        <div className="spinning-card">
                            <div className="spinning-tape">NOW PLAYING</div>
                            <div className="spinning-art" aria-hidden>
                                <div className="vinyl">
                                    <div className="vinyl-label" />
                                </div>
                            </div>
                            <div className="spinning-meta">
                                <p className="spinning-track">KETTAMA — Boiler Room</p>
                                <p className="spinning-artist">KETTAMA · Steel City Dance Discs</p>
                                <div className="spinning-bar">
                                    <span className="spinning-bar-fill" />
                                </div>
                                <p className="spinning-time">
                                    <span>23:14</span>
                                    <span>1:42:08</span>
                                </p>
                            </div>
                            <p className="spinning-side">
                                <em>Side A.</em> On heavy rotation through every long
                                run, late deploy, and Sunday afternoon.
                            </p>
                        </div>

                        <div className="kit">
                            <p className="kit-title">Kit list</p>
                            <ul className="kit-items">
                                <li>Kotlin · Swift · C++</li>
                                <li>AOSP · Android · iOS</li>
                                <li>React · TypeScript</li>
                                <li>Python · PyTorch · TF</li>
                                <li>Spring Boot · PostgreSQL</li>
                                <li>AWS · Docker</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default Skills
