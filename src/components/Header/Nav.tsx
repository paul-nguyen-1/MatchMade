import logo from '../../assets/MatchMadeLogo.webp'
import './Nav.scss'

function Nav() {
    return (
        <div className='navbar'>
            <a href="/" className='navLogo'>
                <img src={logo} alt="logo" />
            </a>
            <div className='miscNavButtons'>
                <a>
                    <span>Find Match</span>
                </a>
                <a>
                    <span>Explore</span>
                </a>
                <a>
                    <span>Friends</span>
                </a>
                <a>
                    <span>Support</span>
                </a>
            </div>
            <div className='loginButtons'>
                <a>
                    <span className='login'>Log In</span>
                </a>
                <a>
                    <span className='signup'>Sign Up</span>
                </a>
            </div>
        </div>
    )
}

export default Nav