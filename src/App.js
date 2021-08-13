import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Skills from './Skills';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/my-website">
          <div className="App">
            <Home />
          </div>
          </Route>
          <Route path="/skills">
            <Navbar />
            <Skills />
          </Route>
          <Route path="/projects">
            <Navbar />
            <Skills />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
