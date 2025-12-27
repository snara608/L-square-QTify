import Logo from "./logo";
import Search from "./search";
import './navbar.css';

function Navbar() {
    return (
        <nav class= "navbar navbar-light bg-light justify-content-between">
                    <Logo />
                    <Search/>
                    <button className="feedback-button">Give Feedback</button>
                  </nav>
    )
}

export default Navbar;