import { backToTop } from "./backToTop";

const Manager = () => {
    return (
        <article className="job-info" id="job-info-mngr">
            <h3>Reporting, Processes and Training Manager</h3>
            <h3 className="subtitle">CS Legal and Responsible Gaming</h3>
            <h4>October 2020 - March 2021</h4>
            <h4>GVC Services EOOD, Sofia, Bulgaria</h4>
            <ul>
                <li>Managing internal and external descriptive and analytical reports, as well as internal processes and 
                    trainings/workshops, working closely with the other managers and the head of the department</li>
                <li>Participating in company projects and training plans as an expert regarding legal, regulatory, privacy 
                    and responsible gaming matters and obligations and working closely with a variety of departments and 
                    management teams in the company internationally as needed</li>
                <li>Participating in the preparation of site and application content relevant to the above areas working 
                    closely with the Compliance and Tech teams and all other relevant teams</li>
                <li>Approving journeys and confluence documents for the Tech teams as per the above and overseeing and 
                    participating in beta testing to ensure expected functionality</li>
                <li>Monitoring technical incidents related to the above listed matters to ensure timely and adequate 
                    resolution and liaise with the Tech teams as needed</li>
                <li>Submitting and monitoring requests for new technical implementations</li>
                <li>Participating in projects with the Tech teams to plan, build and implement new admin tools for the 
                    team in cooperation with the Operations Manager and the Head of the Department</li>
                <li>Working with a variety of internal tools</li>
                <li>Acting as a Mental Health First Aider</li>
            </ul>
            <button onClick={backToTop}>Back to top</button>
        </article>
    );
}
 
export default Manager;