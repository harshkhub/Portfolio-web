
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Project from './components/Project';
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Experiences />
      <Project />
      <ScrollTop />
  
    </div>
  );
}

export default App;