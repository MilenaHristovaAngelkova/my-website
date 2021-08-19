import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [selectedL, setSelectedL] = useState("");

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
                <a href="/my-website"> Milena Hristova-Angelkova</a>
            </div>
            <div className="links">
                <Link to="/skills" id="skills-link" onClick={() => {
                    selectedL !== "skillsL" ? setSelectedL("skillsL") : setSelectedL("");
                    }}>
                    Skills
                </Link>
                <Link to="/projects" id="projects-link" onClick={() => {
                    selectedL !== "projectsL" ? setSelectedL("projectsL") : setSelectedL("");
                    }}>
                    Projects
                </Link>
                <Link to="/experience" id="experience-link" onClick={() => {
                    selectedL !== "experienceL" ? setSelectedL("experienceL") : setSelectedL("");
                    }}>
                    Work Experience
                </Link>
                <Link to="/education" id="education-link" onClick={() => {
                    selectedL !== "educationL" ? setSelectedL("educationL") : setSelectedL("");
                    }}>
                    Education</Link>
                <Link to="/about" id="about-link" onClick={() => {
                    selectedL !== "aboutL" ? setSelectedL("aboutL") : setSelectedL("");
                    }}>
                    About Me
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;