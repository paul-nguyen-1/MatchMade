import { useEffect, useState } from 'react';
import './App.css'
import Preloader from './components/Preloader/Preloader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);
  return (
    <>
      {isLoading ? <Preloader /> :
        <div>
          <h1>Welcome</h1>
        </div>}
    </>
  )
}

export default App
