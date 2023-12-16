import { useEffect, useState } from 'react';
import '../App.css'
import Preloader from '../components/Preloader/Preloader';
import Nav from '../components/Header/Nav';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadScreen = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    preloadScreen();
  }, []);

  return (
    <>
      {isLoading ? <Preloader /> :
        <div>
          <Nav />
          <Outlet />
          <Footer />
        </div>}
    </>
  )
}

export default Root;
