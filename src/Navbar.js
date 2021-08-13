import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        let path = window.location.pathname.slice(1);
        let {children} = document.querySelectorAll('.links')[0];
        
        for (let link of children) {
            link.classList.remove("link-selected");
        }
        
        let element = document.getElementById(path + "-link");
        element ? element.classList.add("link-selected") : element.classList.add("");
    });
    
    return (
        <nav className="navbar">
            <div className="name">
                <span>Milena Hristova-Angelkova</span>
            </div>
            <div className="links">
                <Link to="/skills" id="skills-link">Skills</Link>
                <Link to="/projects" id="projects-link">Projects</Link>
                <Link to="/">Work Experience</Link>
                <Link to="/">Education</Link>
                <Link to="/">Contact Me</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;