import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div className="home">
            <header>
                <span><h1>Welcome to my website</h1></span>
                <span><h2>UNDER CONSTRUCTION</h2></span>
            </header>
            <nav className="bubbles hov">
                <span id="skills"><button><Link to="/skills" target="_blank">Skills</Link></button></span>
                <span id="projects"><button>Projects</button></span>
                <span id="experience"><button>Work Experience</button></span>
            </nav>
            <nav className="more-bubbles hov">
                <span id="education"><button>Education</button></span>
                <span id="contact"><button>Contact Me</button></span>
            </nav>
        </div>
    );
}
 
export default Home;