import codingImg from "../images/filiberto-santillan-1HCb2gPk3ik-unsplash-modified.jpg";
import booksImg from "../images/inaki-del-olmo-NIJuEQw0RKg-unsplash-modified.jpg";

const Education = () => {
    return (
        <article className="education">
            <div className="edu-wrapper">
                <div className="edu-background"
                    style={ {backgroundImage: `url(${codingImg})`} }>
                </div>
                <div className="edu-text">
                    <h3 className="edu-main-heading">Coding-related</h3>
                    <section className="edu-details">
                        <h3 id="coding-heading">Coding-related</h3>
                        <ul>
                            <li>2020 – 2021: JavaScript, HTML, CSS, GitHub, React - <em>Self-taught</em></li>
                            <li>2016 – 2017: Programming Basics, Programming Fundamentals: C# - <em>
                            Software University, Sofia, Bulgaria</em></li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className="edu-wrapper">
                <div className="edu-background"
                    style={ {backgroundImage: `url(${booksImg})`} }>
                </div>
                <div className="edu-text">
                    <h3 className="edu-main-heading">Other</h3>
                    <section className="edu-details">
                        <h3>Other</h3>
                        <ul>                      
                            <li>2007 – 2011: B.A. (Hons) Psychology/Behavioral Science Psychology, First Class Honours - <em>
                            Dublin Business School/American College Dublin, Dublin, Ireland</em></li>
                            <li>2003 – 2007: High School Diploma - <em>Second English Language School “Thomas Jefferson”, Sofia, 
                            Bulgaria</em></li>
                        </ul>
                    </section>
                </div>
            </div>
        </article>
    );
}
 
export default Education;