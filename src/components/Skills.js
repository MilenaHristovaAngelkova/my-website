import coding from './../images/reza-namdari-ZgZsKFnSbEA-unsplash.jpg';
import computer from './../images/bindhiya-bindhu-VUJldY3zw1U-unsplash-modified.jpg';
import city from './../images/adam-borkowski-s1oMlP-RlqU-unsplash-modified.jpg';

const Skills = () => {
    return (
        <article className="skills">
            <div className="wrapper">
                <div className="background" 
                    style= {{ backgroundImage: `url(${coding})` }}>
                </div>
                <section className="text" id="coding-text">
                   <h3 className="main-heading">Coding-Related Skills</h3>
                   <div className="coding-details">
                   <h3>Coding-Related Skills</h3>
                   <ul id="coding-main-ul">
                        <li>Main skills:</li>
                            <ul>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>GitHub</li>
                            </ul>
                        <li>Some previous experience with C#.</li>
                    </ul>
                   </div>
                </section>
            </div>
            <div className="wrapper">
                <div className="background" 
                    style= {{ backgroundImage: `url(${computer})` }}>
                </div>
                <section className="text" id="general-text">
                   <h3 className="main-heading">General Computer Skills</h3>
                   <div className="general-details">
                   <h3>General Computer Skills</h3>
                    <ul>
                        <li>Skilled user of MS Office (Word, Excel, Power Point, Outlook), Adobe, Open Office, internet browsers, e-mails, 
                            messengers, compressing/archiving software.</li>
                        <li>Experience with a multitude of different admin, communication and ticketing tools, including JIRA, 
                            from my previous jobs.</li>
                    </ul>
                    </div>
                </section>
            </div>
            <div className="wrapper">
                <div className="background" 
                    style= {{ backgroundImage: `url(${city})` }}>
                </div>
                <section className="text" id="other-text">
                    <h3 className="main-heading">Other Skills</h3>
                    <div className="other-details">
                    <h3>Other Skills</h3>
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