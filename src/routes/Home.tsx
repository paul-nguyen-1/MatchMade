import { Link } from 'react-router-dom'
import './styles/Home.scss'
import { useAuth } from '../utils/utils';
import Channel from '../components/Channel';

function Home() {
  const { session } = useAuth();
  return (
    <>
      {!session ? <div className='home'>
        <h1>Let's Game.</h1>
        <span>Welcome, create an account or sign in to start your party experience today!</span>
        <Link to="/account-authentication" className='authentication'>
          <button>Start for Free</button>
        </Link>
      </div> : <div>
        <Channel />
      </div>}
    </>
  )
}

export default Home