import React from 'react'
import WorkcardData from './WorkcardData'
import Workcard from './Workcard'
import './Workcard.css'

const Work = () => {
    return (
        <section className="menu section" id="projects">
            <div className="container">
                <div className="menu-head">
                    <span className="eyebrow">§ 03 — Bill of fare</span>
                    <h2 className="display">
                        Selected work, <em>plated.</em>
                    </h2>
                    <p className="lede">
                        A small menu of things I&rsquo;ve cooked up in school and on side
                        nights. Some are still on the burner; a couple are{' '}
                        <em>sold out</em>.
                    </p>
                </div>

                <div className="menu-paper">
                    <div className="menu-paper-header">
                        <div>
                            <p className="menu-paper-title">SELECTED WORK</p>
                            <p className="menu-paper-sub">est. 2022 · refreshed weekly</p>
                        </div>
                        <p className="menu-paper-sig">— Chef&rsquo;s table —</p>
                    </div>

                    {WorkcardData.map((section, i) => (
                        <section className="menu-section" key={i}>
                            <header className="menu-section-head">
                                <h3 className="menu-section-title">{section.section}</h3>
                                <span className="menu-section-rule" />
                            </header>

                            <ul className="menu-items">
                                {section.items.map((item, j) => (
                                    <Workcard key={j} {...item} />
                                ))}
                            </ul>
                        </section>
                    ))}

                    <div className="menu-paper-footer">
                        <p>
                            <em>Pairings:</em> works best with a long run, a strong coffee,
                            and a 4-on-the-floor kick at 124 BPM.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
