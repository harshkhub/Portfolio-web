import { useEffect, useState } from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ScrollTop.css'

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 600)
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            className={`scroll-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollTop}
            aria-label="Scroll to top"
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    )
}

export default ScrollTop
