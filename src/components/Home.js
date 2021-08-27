import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <header>
                <span><h1>Welcome to my website</h1></span>
            </header>
            <nav className="bubbles hov">
                <span className="bubble-bullet"></span><Link to="/skills" id="skillsB">Skills</Link>
                <span className="bubble-bullet"></span><Link to="/projects" id="projectsB">Projects</Link>
                <span className="bubble-bullet"></span><Link to="/experience" id="experienceB">Work Experience</Link>
            </nav>
            <nav className="more-bubbles hov">
                <span className="bubble-bullet"></span><Link to="/education" id="educationB">Education</Link>
                <span className="bubble-bullet"></span><Link to="/about" id="aboutB">About Me</Link>
                <span className="bubble-bullet"></span>
            </nav>
        </div>
    );
}
 
export default Home;