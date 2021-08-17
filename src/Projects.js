import { useState } from "react";
import resume from "./images/Resume.png";
import homepage from "./images/Homepage.png";
import space from "./images/Space-stuff.png";
import ResumeSection from "./ResumeSection";
import HomepageSection from "./HomepageSection";
import SpaceStuffSection from "./SpaceStuffSection";

const Projects = () => {
    const [resumeMoreVis, setResumeMoreVis] = useState(false);
    const [homepageMoreVis, setHomepageMoreVis] = useState(false);
    const [spaceStuffMoreVis, setSpaceStuffMoreVis] = useState(false);

    return (
        <div className="projects-container">
            <article className="projects">
                <div className="projects-wrapper">
                    <div className="projects-background" 
                        style= {{ backgroundImage: `url(${resume})` }}>
                    </div>
                    <section className="description">
                        <h3>Resume Project</h3>
                        <p>This project was a website with my resume details on it.</p>
                        <button onClick={() => {
                            !resumeMoreVis ? setResumeMoreVis(true) : setResumeMoreVis(false)
                            }}>
                            {!resumeMoreVis ? "More details" : "Less details"}
                        </button>
                    </section>
                </div>
                <div className="projects-wrapper">
                    <div className="projects-background" 
                        style= {{ backgroundImage: `url(${homepage})` }}>
                    </div>
                    <section className="description">
                        <h3>Homepage Project</h3>
                        <p>This project was the homepage idea for my website.</p>
                        <button onClick={() => {
                            !homepageMoreVis ? setHomepageMoreVis(true) : setHomepageMoreVis(false)    
                            }}>
                            {!homepageMoreVis ? "More details" : "Less details"}
                        </button>
                    </section>
                </div>
                <div className="projects-wrapper">
                    <div className="projects-background" 
                        style= {{ backgroundImage: `url(${space})` }}>
                    </div>
                    <section className="description">
                        <h3>Space Stuff Project</h3>
                        <p>This is a project that fetches space-related pictures and info.</p>
                        <button onClick={() => {
                            !spaceStuffMoreVis ? setSpaceStuffMoreVis(true) : setSpaceStuffMoreVis(false)
                            }}>
                            {!spaceStuffMoreVis ? "More details" : "Less details"}
                        </button>
                    </section>
                </div>
            </article>
            {resumeMoreVis ? <ResumeSection /> : null}
            {homepageMoreVis ? <HomepageSection /> : null}
            {spaceStuffMoreVis ? <SpaceStuffSection /> : null}
        </div>
    );
}
 
export default Projects;