import { Link } from 'react-router-dom'
import supabase from '../config/supabaseClient'

function Home() {
  console.log(supabase)
  return (
    <div>
        <h1>Let's Game.</h1>
        <span>Welcome, create an account or sign in to start your party experience today!</span>
        <Link to="/account-authentication">
        <button>Start for Free</button>
        </Link>
    </div>
  )
}

export default Home