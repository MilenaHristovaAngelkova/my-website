import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [selectedL, setSelectedL] = useState(false);

    useEffect(() => {
        let path = window.location.pathname.slice(1);
        let {children} = document.querySelectorAll('.links')[0];
        
        for (let link of children) {
            link.classList.remove("link-selected");
        }
        
        let element = document.getElementById(path + "-link");
        element ? element.classList.add("link-selected") : element.classList.add("");
    }, [selectedL]);
    
    return (
        <nav className="navbar">
            <div className="name">
                <span>Milena Hristova-Angelkova</span>
            </div>
            <div className="links">
                <Link to="/skills" id="skills-link" onClick={() => setSelectedL(true)}>Skills</Link>
                <Link to="/projects" id="projects-link" onClick={() => setSelectedL(true)}>Projects</Link>
                <Link to="/experience" id="experience-link" onClick={() => setSelectedL(true)}>Work Experience</Link>
                <Link to="/">Education</Link>
                <Link to="/">Contact Me</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;