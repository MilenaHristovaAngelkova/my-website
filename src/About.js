import myImg from "./images/My_pic.jpg"

const About = () => {
    return (
        <article className="about">
            <div className="photo">
                <img src={myImg} alt="Me" />
            </div>
            <span id="smallBubble1"></span>
            <span id="smallBubble2"></span>
            <span id="smallBubble3"></span>
            <div className="about-wrapper">
                <section className="about-info">
                    <p>I took a rather winding path to get into coding, but sometimes it takes time to find something that you
                    want to do. Over the years, problem-solving has been a big part of my life in different forms, and when I got 
                    into coding, I quickly discovered that I like it, and the countless options that it brings about. There is 
                    something very satisfactory in creating things a certain way and then being able to see them and use them.</p><br />
                    <p>Getting things done, and done well, as well as learning new things, brings me joy, so I continously work on 
                    improving and finding out more.</p><br />
                    <p>Get in touch if you want to work and make things better together.</p>
                </section>
            </div>
        </article>
    );
}

export default About;