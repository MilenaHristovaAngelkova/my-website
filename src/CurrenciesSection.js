import Currencies from "./images/Currencies.png"

const CurrenciesSection = () => {
    return (
        <article className="currencies-details" id="currencies-more">
            <h3>Currencies Project More Details</h3>
            <div className="currencies-details-content">
                <section className="currencies-img">
                    <img src={Currencies} alt="Info on a website page." id="currencies-img-details"/>
                </section>
                <section className="currencies-more-info">
                    <p>I did two versions of this project that fetches currency rates for the currency selected from the drop-down
                    menu or USD by default. The first version loads details based on the selected currency, while the second version 
                    fetches all data first and subsequently displays the data relevant to the selected currency. Both use localstorage 
                    so that the fetched data is used from there if the user wants to access the same data on the same day. There is also 
                    information on the longest subarray of rates for the respective currency that differ by no more than 0.5 amongst them. 
                    The app is quite responsive.</p><br />
                    <p>To see it click <a href="https://milenahristovaangelkova.github.io/currency-rates-converter/">
                    here</a>.</p>
                    <p>To see my GitHub repos for it click 
                    <a href="https://github.com/MilenaHristovaAngelkova/currency-rates-converter/tree/master"> here </a>
                    for the first version and <a href="https://github.com/MilenaHristovaAngelkova/currency-rates/tree/master"> here </a>
                    for the second version.</p>
                </section> 
            </div>
            <button className="btn-top-projects" id="btn-currs" onClick={() => window.scrollTo(0, 0)}>Back to top</button>
        </article>
    );
}
 
export default CurrenciesSection;