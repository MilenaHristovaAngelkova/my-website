import resumeDetails from "./../images/Resume-details.png";
import resumeMobile from "./../images/Resume-mob.png";
import resumeMobileDetails from "./../images/Resume-mob-details.png";

const ResumeSection = () => {
    return (
        <article className="resume-details" id="resume-more">
            <h3>Resume Project More Details</h3>
            <div className="resume-details-content">
                <section className="resume-imgs">
                    <img src={resumeDetails} alt="Info on a website page." id="resume-img-details"/>
                    <img src={resumeMobile} alt="Mobile responsive homepage." id="resume-img-mob"/>
                    <img src={resumeMobileDetails} alt="Info on a mobile responsive page." id="resume-mob-details"/>
                </section> 
                <section className="resume-more-info">
                    <p>This was my first project. The purpose was to put the information from my resume online in the form of a website. 
                    It was done with HTML, CSS and Vanilla JavaScript, and it is responsive.</p><br />
                    <p>You can see it here: <a href="https://milenahristovaangelkova.github.io/resume/">
                    https://milenahristovaangelkova.github.io/resume/</a></p>
                    <p>My GitHub repo for it is <a href="https://github.com/MilenaHristovaAngelkova/resume">
                    https://github.com/MilenaHristovaAngelkova/resume</a></p>
                </section> 
            </div>
            <button className="btn-top-projects" onClick={() => window.scrollTo(0, 0)}>Back to top</button>                   
        </article>
    );
}
 
export default ResumeSection;