import { backToTop } from "./backToTop";

const Volunteer = () => {
    return (
        <article className="job-info" id="job-info-vltr">
            <h3>Volunteer (Occasional)</h3>
            <h4>December 2011 – March 2012</h4>
            <h4>National Centre for Drugs and Addictions, Sofia, Bulgaria</h4>
            <ul className="smallerUl">
                <li>Preparation of a literature review and English-Bulgarian translations</li>
                <li>Helping at a therapeutic community</li>
            </ul>
            <button onClick={backToTop}>Back to top</button>
        </article>
    );
}
 
export default Volunteer;