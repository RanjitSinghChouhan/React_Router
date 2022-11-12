
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
    return (
        <div>
            <nav className='mainNav'>
                {/* <Link to='/'>Home</Link>
                <Link to='about'>About</Link> */}
                <NavLink style={navLinkStyle} to='/'>Home</NavLink>
                <NavLink style={navLinkStyle} to='about'>About</NavLink>
                <NavLink style={navLinkStyle} to='products'>Products</NavLink>
            </nav>
        </div>
    )
}
