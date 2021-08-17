import homepageVideo from "./videos/Bubbles.mp4";

const HomepageSection = () => {
    return ( 
        <article className="homepage-details">
            <h3>Homepage Project More Details</h3>
            <video src={homepageVideo} controls alt="Video demo of the homepage.">
                Your brower does not support the video tag.
            </video>
            <section className="homepage-more-info">
                    <p>For my second project I created a homepage, inspired by bubbles. It was done with HTML and CSS.</p><br />
                    <p>It is currently published here: <a href="https://milenahristovaangelkova.github.io/homepage/">
                    https://milenahristovaangelkova.github.io/homepage/</a></p>
                    <p>My GitHub repo for it is <a href="https://github.com/MilenaHristovaAngelkova/homepage">
                    https://github.com/MilenaHristovaAngelkova/homepage</a></p>
                </section> 
        </article>
     );
}
 
export default HomepageSection;