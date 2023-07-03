import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loaded, setLoaded] = useState(false);
  // mock loading effect
  useEffect(() => {
    if (!window.sessionStorage.getItem('isLoaded')) {
      const timer = setTimeout(() => {
        window.sessionStorage.setItem('isLoaded', 'true');
        setLoaded(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
    return setLoaded(true);
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
      <Loader loaded={loaded} />
    </BrowserRouter>
  );
}

export default App;
