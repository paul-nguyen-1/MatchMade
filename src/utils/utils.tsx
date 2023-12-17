import { useState, useEffect, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../config/supabaseClient';
import { Session } from '@supabase/supabase-js';

export const useAuth = () => {
    const navigate = useNavigate();
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
            session ? navigate('/') : null;
        };

        const handleAuthChange = (_event: any, session: SetStateAction<Session | null>) => {
            setSession(session);
            session ? navigate('/') : null;
        };

        const { data: { subscription } } = supabase.auth.onAuthStateChange(handleAuthChange);
        checkSession();
        session ? navigate('/') : null;
        return () => subscription.unsubscribe();
    }, [navigate]);

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

    return { session, handleSignOut };
};

export const preloadScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preloadScreen = () => {
            setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem('preload', 'isLoaded');
            }, 4000);
        };

        // Check whether 'preload' key is present in sessionStorage
        const isPreloaded = sessionStorage.getItem('preload') === 'isLoaded';
        !isPreloaded ? preloadScreen() : setIsLoading(false)

    }, []);
    return { isLoading }
}