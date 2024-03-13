
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Experiences />
      <Projects/>
    </div>
  );
}

export default App;