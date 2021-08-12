import coding from './images/reza-namdari-ZgZsKFnSbEA-unsplash.jpg';
import computer from './images/bindhiya-bindhu-VUJldY3zw1U-unsplash-modified.jpg';
import city from './images/adam-borkowski-s1oMlP-RlqU-unsplash-modified.jpg';

const Skills = () => {
    return (
        <article className="skills">
            <div className="wrapper">
                <div className="background" 
                    style= {{ backgroundImage: `url(${coding})` }}>
                </div>
                <section className="text" id="coding-text">
                   <h3>Coding-Related Skills</h3>
                   <div className="coding-details">
                   <ul>
                        <li>Main: JavaScript, React, HTML, CSS, GitHub</li>
                        <li>Some previous experience with C# and JIRA.</li>
                    </ul>
                   </div>
                </section>
            </div>
            <div className="wrapper">
                <div className="background" 
                    style= {{ backgroundImage: `url(${computer})` }}>
                </div>
                <section className="text" id="general-text">
                   <h3>General Computer Skills</h3>
                   <div className="general-details">
                    <ul>
                        <li>Skilled user of MS Office (Word, Excel, Power Point, Outlook), Adobe, Open Office, internet browsers, e-mails, 
                            messengers, compressing/archiving software.</li>
                        <li>Experience with a multitude of different admin and communication tools from my previous jobs.</li>
                    </ul>
                    </div>
                </section>
            </div>
            <div className="wrapper">
                <div className="background" 
                    style= {{ backgroundImage: `url(${city})` }}>
                </div>
                <section className="text" id="other-text">
                    <h3>Other Skills</h3>
                    <div className="other-details">
                        <h4>Languages</h4>
                        <ul className="other-sublist">
                            <li>Bulgarian - native</li>
                            <li>English - fluent/advanced</li>
                            <li>German - a bit</li>
                            <li>French - a bit</li>
                        </ul>
                        <h4>Driving</h4>
                            <ul className="other-sublist">    
                                <li>Category B</li>
                            </ul>
                        <h4>Other Certificates (2019 - 2021)</h4>
                            <ul className="other-sublist">
                                <li>Management and Organizational Trainings</li>
                                <li>Mental Health First Aider</li>
                                <li>Handling Written Complaints and Business Writing</li>
                            </ul>                    
                   </div>
                </section>
            </div>
        </article>
    );
}
 
export default Skills;