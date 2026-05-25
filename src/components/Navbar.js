import { useState, useEffect } from 'react'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="navbar container">
                <a href="#top" className="logo" onClick={closeMenu}>
                    <span className="logo-mark">HK</span>
                    <span className="logo-dot" />
                </a>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item"><a href="#about" onClick={closeMenu}>About</a></li>
                    <li className="nav-item"><a href="#experience" onClick={closeMenu}>Experience</a></li>
                    <li className="nav-item"><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li className="nav-item"><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>

                <div className="hamburger" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
