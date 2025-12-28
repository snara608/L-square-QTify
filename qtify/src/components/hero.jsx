import hero from "./assets/Hero.svg";

function Hero() {
    return(
        <div className="hero-container">
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
            <img src={hero} className="hero-img" alt="hero"></img>
        </div>

    )
}

export default Hero;
