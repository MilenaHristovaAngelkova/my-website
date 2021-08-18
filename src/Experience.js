import { useState } from "react";
import mngrImg from "./images/myriam-jessier-eveI7MOcSmw-unsplash.jpg";
import tlImg from "./images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import lrgImg from "./images/markus-winkler-TtJ0CLjLi6w-unsplash.jpg";
import csImg from "./images/jon-tyson-vVSleEYPSGY-unsplash.jpg";
import csRepImg from "./images/imattsmart-eELCRf8nwsI-unsplash.jpg";
import addictionImg from "./images/michael-longmire-dLYk1p9YB0s-unsplash.jpg";
import therapyImg from "./images/dan-meyers-hluOJZjLVXc-unsplash.jpg";
import Manager from "./Manager";
import TeamLead from "./TeamLead";
import CsLrg from "./CsLrg";
import Cs from "./Cs";
import CsRep from "./CsRep";
import Volunteer from "./Volunteer";
import Internship from "./Internship";

const Experience = () => {
    const [mark, setMark] = useState("");

    return (
        <div className="experience-container">
            <article className="work">
                <div className="experience-wrapper">
                    <div className="work-background" 
                        style= {{ backgroundImage: `url(${mngrImg})` }}>
                    </div>
                    <section className="job-description">
                        <h3>Reporting, Processes and Training Manager</h3>
                        <h4>2020 - 2021</h4>
                        <p>GVC Services EOOD, Sofia, Bulgaria</p>
                        <button onClick={() => {
                            mark !== "btnMngr" ? setMark("btnMngr") : setMark("");
                            }
                            }>
                            {mark !== "btnMngr" ? "More details" : "Less details"}
                        </button>
                    </section>
                </div>
                <div className="experience-wrapper">
                    <div className="work-background" 
                        style= {{ backgroundImage: `url(${tlImg})` }}>
                    </div>
                    <section className="job-description">
                        <h3>CS Legal and Responsible Gaming Team Lead</h3>
                        <h4>2019 - 2020</h4>
                        <p>GVC Services EOOD, Sofia, Bulgaria</p>
                        <button onClick={() => {
                            mark !== "btnTL" ? setMark("btnTL") : setMark("");
                            }
                            }>
                            {mark !== "btnTL" ? "More details" : "Less details"}
                        </button>
                    </section>
                </div>
                <div className="experience-wrapper">
                    <div className="work-background" 
                        style= {{ backgroundImage: `url(${lrgImg})` }}>
                    </div>
                    <section className="job-description">
                        <h3>CS Legal and Responsible Gaming Associate</h3>
                        <h4>2017 - 2019</h4>
                        <p>GVC Services EOOD (former Bwin.Party Services EOOD), Sofia, Bulgaria</p>
                        <button onClick={() => {
                            mark !== "btnLrg" ? setMark("btnLrg") : setMark("");
                            }
                            }>
                            {mark !== "btnLrg" ? "More details" : "Less details"}
                        </button>
                    </section>
                </div>  
                <div className="experience-wrapper">
                    <div className="work-background" 
                        style= {{ backgroundImage: `url(${csImg})` }}>
                    </div>
                    <section className="job-description">
                        <h3>Customer Service Representative</h3>
                        <h4>2012 - 2017</h4>
                        <p>Bwin.Party Services EOOD, Sofia, Bulgaria</p>
                        <button onClick={() => {
                            mark !== "btnCs" ? setMark("btnCs") : setMark("");
                            }
                            }>
                            {mark !== "btnCs" ? "More details" : "Less details"}
                        </button>
                    </section>
                </div>
                <div className="experience-wrapper">
                    <div className="work-background" 
                        style= {{ backgroundImage: `url(${csRepImg})` }}>
                    </div>
                    <section className="job-description">
                        <h3>Customer Service Representative</h3>
                        <h4>2012</h4>
                        <p>V-Online Systems, Sofia, Bulgaria</p>
                        <button onClick={() => {
                            mark !== "btnRep" ? setMark("btnRep") : setMark("");
                            }
                            }>
                            {mark !== "btnRep" ? "More details" : "Less details"}
                        </button>
                    </section>
                </div>
                <div className="experience-wrapper">
                    <div className="work-background" 
                        style= {{ backgroundImage: `url(${addictionImg})` }}>
                    </div>
                    <section className="job-description">
                        <h3>Volunteer (Occasional)</h3>
                        <h4>2011 – 2012</h4>
                        <p>National Centre for Drugs and Addictions, Sofia, Bulgaria</p>
                        <button onClick={() => {
                            mark !== "btnVol" ? setMark("btnVol") : setMark("");
                            }
                            }>
                            {mark !== "btnVol" ? "More details" : "Less details"}
                        </button>
                    </section>
                </div>
                <div className="experience-wrapper">
                    <div className="work-background" 
                        style= {{ backgroundImage: `url(${therapyImg})` }}>
                    </div>
                    <section className="job-description">
                        <h3>Internship</h3>
                        <h4>2011</h4>
                        <p>The Antibullying Centre, Trinity College Dublin, Dublin, Ireland</p>
                        <button onClick={() => {
                            mark !== "btnInt" ? setMark("btnInt") : setMark("");
                            }
                            }>
                            {mark !== "btnInt" ? "More details" : "Less details"}
                        </button>
                    </section>
                </div>                                 
            </article>
            {mark === "btnMngr" ? <Manager /> : null}
            {mark === "btnTL" ? <TeamLead /> : null}
            {mark === "btnLrg" ? <CsLrg /> : null}
            {mark === "btnCs" ? <Cs /> : null}
            {mark === "btnRep" ? <CsRep /> : null}
            {mark === "btnVol" ? <Volunteer /> : null}
            {mark === "btnInt" ? <Internship /> : null}
        </div>
    );
}
 
export default Experience;