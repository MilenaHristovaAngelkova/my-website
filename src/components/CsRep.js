const CsRep = () => {
    return (
        <article className="job-info" id="job-info-rep">
            <h3>Customer Service Representative</h3>
            <h4>February - August 2012</h4>
            <h4>V-Online Systems, Sofia, Bulgaria</h4>
            <ul className="smallerUl">
                <li>Monitoring admin databases for changes to carry out established processed</li>
                <li>Handling customers' queries via chat, email and phone</li>
                <li>Providing technical support to customers and assisting with payments when needed</li>
                <li>Liaising with colleagues, other departments, managers and international franchises</li>
                <li>Preparing reports, manuals and presentations</li>
                <li>Escalating complex issues</li>
            </ul>
            <button className="btn-top" onClick={() => window.scrollTo(0, 0)}>Back to top</button>
        </article>
    );
}
 
export default CsRep;