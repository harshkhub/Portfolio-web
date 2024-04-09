import { useState } from 'react'
import logo from './images/logo.png'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css' 
import Experiences from './Experiences.js'

const Navbar = () =>{

    const[click, setClick] = useState(false)
    const handleclick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return(
        <div className="header">
            <nav className="navbar">
            <a href='/' className="logo">
                    <img src={logo}alt="logo"/>
                </a>
                <div className='hamburger' onClick={handleclick}>
                    {click ? (<FontAwesomeIcon icon= {faTimes} size={30} style={{ color: '#ffffff' }} />)
                        : (<FontAwesomeIcon icon = {faBars} size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href = '#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href = '#experiences' onClick={closeMenu}>Experiences</a>
                    </li>
                    <li className='nav-item'> 
                        <a href='#projects' onClick={closeMenu}>Projects</a>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar