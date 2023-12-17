import { useEffect, useState } from 'react';
import '../App.css';
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
        sessionStorage.setItem('preload', 'isLoaded');
      }, 4000);
    };

    // Check whether 'preload' key is present in sessionStorage
    const isPreloaded = sessionStorage.getItem('preload') === 'isLoaded';
    !isPreloaded ? preloadScreen() : setIsLoading(false)

  }, []);

  return (
    <>
      {isLoading ? <Preloader /> : (
        <div>
          <Nav />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Root;
