import { Auth } from '@supabase/auth-ui-react';
import supabase from '../config/supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            if (session) {
                navigate('/');
            }
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);

            if (session) {
                navigate('/');
            }
        });

        return () => subscription.unsubscribe();
    }, [navigate]);

    if (!session) {
        return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
    } else {
        return <div>
            <h1>You're already signed in!</h1>
        </div>;
    }
}
