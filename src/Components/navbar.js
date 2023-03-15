import { NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png'
                alt="YouTube Logo"
            />

            <NavLink exact to='/'>
                Home 
            </NavLink>

            |<NavLink to='/about'>About</NavLink>
        </nav>
    );
};

export default Navbar; 