import './Nav.css';
const Nav = () => {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Myrecipe</a>
            </div>
            <ul className="navbarlinks">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact</a></li>

            </ul>
        </nav>
    );
}
export default Nav;