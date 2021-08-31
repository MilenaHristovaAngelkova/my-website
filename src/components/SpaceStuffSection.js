import spaceStuffDetails from "./../images/Space-stuff-details.png";
import spaceStuffMob from "./../images/Space-stuff-mob.png";

const SpaceStuffSection = () => {
    return (
        <article className="space-stuff-details" id="space-more">
            <h3>Space Stuff Project More Details</h3>
            <div className="space-stuff-details-content">
                <section className="space-stuff-imgs">
                    <img src={spaceStuffDetails} alt="Info on a website page." id="space-stuff-img-details"/>
                    <img src={spaceStuffMob} alt="Mobile responsive homepage." id="space-stuff-img-mob"/>
                </section>
                <section className="space-stuff-more-info">
                    <p>This was my first React app. It fetches information about a space image of the day
                    and asteroid/comet close approaches to Earth from NASA free APIs. The app is responsive.</p><br />
                    <p>To see it click <a href="https://milenahristovaangelkova.github.io/space-stuff-project/">
                    here</a>.</p>
                    <p>To see my GitHub repo for it click <a href="https://github.com/MilenaHristovaAngelkova/space-stuff-project/tree/master">
                    here</a>.</p>
                </section> 
            </div>
            <button className="btn-top-projects" onClick={() => window.scrollTo(0, 0)}>Back to top</button>
        </article>
    );
}
 
export default SpaceStuffSection;