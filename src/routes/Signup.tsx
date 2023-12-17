import { Auth } from '@supabase/auth-ui-react';
import supabase from '../config/supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useAuth } from '../utils/utils';

export default function Signup() {
    const { session } = useAuth();

    if (!session) {
        return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
    } else {
        return <div>
            <h1>You're already signed in!</h1>
        </div>;
    }
}
