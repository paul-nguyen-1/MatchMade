import { Link } from 'react-router-dom'
import logo from '../../assets/MatchMadeLogo.webp'
import './Nav.scss'
import { useAuth } from '../../utils/utils';

function Nav() {
    const { session, handleSignOut } = useAuth();

    return (
        <div className='navbar'>
            <Link to="/" className='navLogo'>
                <img src={logo} alt="logo" />
            </Link>
            <div className='miscNavButtons'>
                <Link to='/match'>Find Match</Link>
                <Link to='/explore'>Explore</Link>
                <Link to='/friends'>Friends</Link>
                <Link to='/contacts'>Support</Link>
            </div>
            <div className='loginButtons'>
                {!session ? <Link to='/account-authentication' className='authentication'>Login / Sign Up</Link> : <Link to='/' className='authentication' onClick={handleSignOut}>Signout</Link>}
            </div>
        </div>
    )
}

export default Nav