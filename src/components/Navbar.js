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
                    <span className="logo-monogram">HK</span>
                    <span className="logo-meta">
                        <span className="logo-line">Field guide</span>
                        <span className="logo-sub">No. 06 · 2026</span>
                    </span>
                </a>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#about" onClick={closeMenu}>
                            <span className="nav-num">01</span> Cover
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#experience" onClick={closeMenu}>
                            <span className="nav-num">02</span> Route
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" onClick={closeMenu}>
                            <span className="nav-num">03</span> Menu
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#notes" onClick={closeMenu}>
                            <span className="nav-num">04</span> Notes
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={closeMenu}>
                            <span className="nav-num">05</span> Postcard
                        </a>
                    </li>
                </ul>

                <button
                    className="hamburger"
                    onClick={handleClick}
                    aria-label="Toggle menu"
                >
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </button>
            </nav>
        </header>
    )
}

export default Navbar
