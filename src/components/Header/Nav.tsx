import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/MatchMadeLogo.webp'
import './Nav.scss'
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import supabase from '../../config/supabaseClient';

function Nav() {
    const navigate = useNavigate();
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (session) {
                navigate('/');
            }
            if (error) {
                console.error('Sign-out error:', error.message);
            }
        } catch (error) {
            console.error('Error during sign-out:' + error);
        }
    };

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
                {!session ? <Link to='/account-authentication' className='authentication'>Login / Sign Up</Link> : <Link to='/' className='authentication' onClick={handleSignOut}>Signout</Link>}
            </div>
        </div>
    )
}

export default Nav