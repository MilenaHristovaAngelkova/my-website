import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <header>
                <span><h1>Welcome to my website</h1></span>
            </header>
            <nav className="bubbles hov">
                <Link to="/skills" id="skillsB">Skills</Link>
                <Link to="/projects" id="projectsB">Projects</Link>
                <Link to="/experience" id="experienceB">Work Experience</Link>
            </nav>
            <nav className="more-bubbles hov">
                <Link to="/education" id="educationB">Education</Link>
                <Link to="/about" id="aboutB">About Me</Link>
            </nav>
        </div>
    );
}
 
export default Home;