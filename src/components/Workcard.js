import React from 'react'
import { faArrowUpRightFromSquare, faCode, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Workcard = (props) => {
    return (
        <li className="dish">
            <div className="dish-head">
                <h4 className="dish-title">
                    {props.title}
                    {props.privateCode && <span className="dish-sold">sold out</span>}
                </h4>
                <span className="dish-dots" aria-hidden />
                <span className="dish-year">{props.year}</span>
            </div>

            <p className="dish-desc">{props.description}</p>

            <div className="dish-foot">
                <p className="dish-made">
                    <span className="dish-made-label">Made with</span>
                    {props.made.map((m, i) => (
                        <React.Fragment key={m}>
                            <span className="dish-ingredient">{m}</span>
                            {i < props.made.length - 1 && <span className="dish-sep">·</span>}
                        </React.Fragment>
                    ))}
                </p>

                {!props.privateCode ? (
                    <p className="dish-links">
                        <a href={props.view} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> taste
                        </a>
                        <span className="dish-sep">·</span>
                        <a href={props.source} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faCode} /> recipe
                        </a>
                    </p>
                ) : (
                    <p className="dish-private">
                        <FontAwesomeIcon icon={faLock} /> private kitchen
                    </p>
                )}
            </div>
        </li>
    )
}

export default Workcard
