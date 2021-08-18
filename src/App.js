import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Footer from './Footer';
import About from './About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/my-website">
          <div className="App">
            <Home />
          </div>
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
