import { useState } from "react";
import resume from "../images/Resume.png";
import homepage from "../images/Homepage.png";
import space from "../images/Space-stuff.png";
import ResumeSection from "./ResumeSection";
import HomepageSection from "./HomepageSection";
import SpaceStuffSection from "./SpaceStuffSection";

const Projects = () => {
    const [mark, setMark] = useState("");

    return (
        <div className="projects-container">
            <article className="projects">
                <div className="projects-wrapper">
                    <div className="projects-background" 
                        style= {{ backgroundImage: `url(${space})` }}>
                    </div>
                    <section className="description">
                        <h3>Space Stuff Project</h3>
                        <p>This is a project that fetches space-related pictures and info.</p>
                        <button onClick={() => {
                            mark !== "spaceStuffMore" ? setMark("spaceStuffMore") : setMark("")
                            }}>
                            {mark !== "spaceStuffMore" ? <a href="#space-more">More details</a> : "Less details"}
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
                            mark !== "homepageMore" ? setMark("homepageMore") : setMark("")
                            }}>
                            {mark!== "homepageMore" ? <a href="#homepage-more">More details</a> : "Less details"}
                        </button>
                    </section>
                </div>
                <div className="projects-wrapper">
                    <div className="projects-background" 
                        style= {{ backgroundImage: `url(${resume})` }}>
                    </div>
                    <section className="description">
                        <h3>Resume Project</h3>
                        <p>This project was a website with my resume details on it.</p>
                        <button onClick={() => {
                            mark !== "resumeMore" ? setMark("resumeMore") : setMark("")
                            }}>
                            {mark !== "resumeMore" ? <a href="#resume-more">More details</a> : "Less details"}
                        </button>
                    </section>
                </div>
            </article>
            {mark === "resumeMore" ? <ResumeSection /> : null}
            {mark === "homepageMore" ? <HomepageSection /> : null}
            {mark === "spaceStuffMore" ? <SpaceStuffSection /> : null}
        </div>
    );
}
 
export default Projects;