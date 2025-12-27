import hero from "./assets/Hero.svg";

function Hero() {
    return(
        <div className="hero-container">
            <img src={hero} className="hero-img" alt="Hero-Img"></img>
        </div>

    )
}

export default Hero;
