import './Footer.css'
import { FaPhone } from 'react-icons/fa'

const Footer = () =>{
    return(
        <div className='footer' id='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='phone'>
                        <FaPhone size={20} style={{marginRight: "2rem"}}/>
                        <div>
                            <p>+1 213-561-9479</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer