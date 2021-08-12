import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="name">
                <span>Milena Hristova-Angelkova</span>
            </div>
            <div className="links">
                <Link to="/skills" id="skills-link">Skills</Link>
                <Link>Projects</Link>
                <Link>Work Experience</Link>
                <Link>Education</Link>
                <Link>Contact Me</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;