import { useState } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import supabase from '../config/supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function Signup() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (event : any) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      alert(error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  return (
    <>
    {/* TODO: adding 3rd party providers attributes for authentication (providers={['google', 'facebook', 'github']}) */}
    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark"/>
    </>
  )
}