import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';

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
            </Switch>
          </Router>
      </Switch>
    </Router>
  );
}

export default App;
