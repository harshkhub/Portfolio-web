import { useEffect, useState } from "react"
import './ScrollTop.css'


const ScrollTop = () =>{

    const [isVisible, setisVisiable] = useState(false)

    const toggleVisibility = () =>{
        const scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;

        if(scrollToTop > 600){
            setisVisiable(true)
        }
        else{
            setisVisiable(false)
        }
    }

    const scrollTop = () =>{
        document.documentElement.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () =>{
            window.removeEventListener('scroll', toggleVisibility)
        }
    },[]);

    return(
        isVisible && (
            <button className="scroll-top" onClick={scrollTop} >
                Go to top
            </button>
        )
    )
}

export default ScrollTop