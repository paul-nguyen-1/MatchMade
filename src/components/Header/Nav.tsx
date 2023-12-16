import logo from '../../assets/MatchMadeLogo.webp'

function Nav() {
    return (
        <div className='navbar'>
            <a href="/" className='navLogo'>
                <img src={logo} alt="logo" />
            </a>
        </div>
    )
}

export default Nav