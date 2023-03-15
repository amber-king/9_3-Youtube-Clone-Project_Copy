import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav>

            <h2>Youtube 👾</h2>
            <NavLink to='/'>Home </NavLink>

            |

            <NavLink to='/about'> About</NavLink>
        </nav>
    )
}

export default Navbar; 