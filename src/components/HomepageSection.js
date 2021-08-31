import homepageVideo from "../videos/Bubbles.mp4";

const HomepageSection = () => {
    return ( 
        <article className="homepage-details" id="homepage-more">
            <h3>Homepage Project More Details</h3>
            <video src={homepageVideo} controls alt="Video demo of the homepage.">
                Your brower does not support the video tag.
            </video>
            <section className="homepage-more-info">
                    <p>I created a homepage, inspired by bubbles. It was done with HTML and CSS. It was subsequently incorporated in 
                    this React project (my-website).</p><br />
                    <p>To see it click <a href="https://milenahristovaangelkova.github.io/homepage/">
                    here</a>.</p>
                    <p>To see my GitHub repo for it click <a href="https://github.com/MilenaHristovaAngelkova/homepage">
                    here</a>.</p>
            </section>
            <button className="btn-top-projects" id="btn-homepage-top" onClick={() => window.scrollTo(0, 0)}>Back to top</button>
        </article>
     );
}
 
export default HomepageSection;