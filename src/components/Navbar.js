import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {CgClose} from "react-icons/cg";

const Navbar = () => {
    const [selectedL, setSelectedL] = useState("");
    const [mobMenuClick, setMobMenuClick] = useState(false);

    useEffect(() => {
        let path = window.location.pathname.slice(1);
        let {children} = document.querySelectorAll('.links')[0];
        
        for (let link of children) {
            link.classList.remove("link-selected");
        }
        
        let element = document.getElementById(path + "-link");
        if (element !== null) {
            element ? element.classList.add("link-selected") : element.classList.add("");
        }
    }, [selectedL]);

    const handleMobMenuClick = () => {setMobMenuClick(!mobMenuClick)};

    const closeMobMenu = () => {
        handleMobMenuClick();
        document.querySelector(".links").setAttribute("style", "display:none");
    }

    const openMobMenu = () => {
        handleMobMenuClick();
        document.querySelector(".links").setAttribute("style", "display:flex");
    }

    const mobHamburgerMenu = <GiHamburgerMenu className="mob-menu-icon" onClick={openMobMenu}/>;
    const mobCloseMenu = <CgClose className="mob-menu-icon" onClick={closeMobMenu}/>;
    
    return (
        <nav className="navbar">
            <div className="name">
                <a href="/my-website"> Milena Hristova-Angelkova</a>
            </div>
            <div className="mobile-menu">
                {mobMenuClick ? mobCloseMenu : mobHamburgerMenu}
            </div>
            <div className="links">
                <Link to="/skills" id="skills-link" onClick={() => {
                    selectedL !== "skillsL" ? setSelectedL("skillsL") : setSelectedL("");
                    mobMenuClick && closeMobMenu();
                    }}>
                    Skills
                </Link>
                <Link to="/projects" id="projects-link" onClick={() => {
                    selectedL !== "projectsL" ? setSelectedL("projectsL") : setSelectedL("");
                    mobMenuClick && closeMobMenu();
                    }}>
                    Projects
                </Link>
                <Link to="/experience" id="experience-link" onClick={() => {
                    selectedL !== "experienceL" ? setSelectedL("experienceL") : setSelectedL("");
                    mobMenuClick && closeMobMenu();
                    }}>
                    Work Experience
                </Link>
                <Link to="/education" id="education-link" onClick={() => {
                    selectedL !== "educationL" ? setSelectedL("educationL") : setSelectedL("");
                    mobMenuClick && closeMobMenu();
                    }}>
                    Education</Link>
                <Link to="/about" id="about-link" onClick={() => {
                    selectedL !== "aboutL" ? setSelectedL("aboutL") : setSelectedL("");
                    mobMenuClick && closeMobMenu();
                    }}>
                    About Me
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;