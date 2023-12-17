import { Link } from 'react-router-dom'
import logo from '../../assets/MatchMadeLogo.webp'
import './Nav.scss'

function Nav() {
    return (
        <div className='navbar'>
            <Link to="/" className='navLogo'>
                <img src={logo} alt="logo" />
            </Link>
            <div className='miscNavButtons'>
                <Link to='/'>Find Match</Link>
                <Link to='/'>Explore</Link>
                <Link to='/'>Friends</Link>
                <Link to='/'>Support</Link>
            </div>
            <div className='loginButtons'>
                <Link to='/account-authentication' className='authentication'>Login / Sign Up</Link>
            </div>
        </div>
    )
}

export default Nav