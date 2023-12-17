import { Auth } from '@supabase/auth-ui-react'
import supabase from '../config/supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function Signup() {
  return (
    <>
    {/* TODO: adding 3rd party providers attributes for authentication (providers={['google', 'facebook', 'github']}) */}
    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark"/>
    </>
  )
}