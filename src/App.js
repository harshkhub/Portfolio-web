import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Experiences from './components/Experiences'
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

function App() {
    return (
        <div className="app" id="top">
            <Navbar />
            <main>
                <About />
                <Experiences />
                <Project />
                <Skills />
            </main>
            <Footer />
            <ScrollTop />
        </div>
    )
}

export default App
