const Internship = () => {
    return (
        <article className="job-info" id="job-info-intr">
            <h3>Internship</h3>
            <h4>May – July 2011</h4>
            <h4>The Antibullying Centre, Trinity College Dublin, Dublin, Ireland</h4>
            <ul className="smallerUl">
                <li>Carrying out administrative duties</li>
                <li>Partaking in psychological assessments of clients</li>
                <li>Writing reports</li>
                <li>Carrying out research</li>
                <li>Partaking in workshops and presentations</li>
            </ul>
            <button className="btn-top" onClick={() => window.scrollTo(0, 0)}>Back to top</button>
        </article>
    );
}
 
export default Internship;