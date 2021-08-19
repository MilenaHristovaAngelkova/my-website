import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/my-website">
            <Home />
          </Route>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/skills">
                <Skills />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/education">
                <Education />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
            <Footer />
          </Router>
      </Switch>
    </Router>
  );
}

export default App;
