import { useState, useEffect } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import OurServices from './Components/Service/Service';
import Team from './Components/Team/Team';
import Footer from './Components/Footer/Footer';
import ConnectSection from './Components/Connect/Connect';
import Loader from './Components/Loader/Loader';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="font-sans">
      {loading && <Loader />}

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <OurServices />
          {/* <Testimonials /> */}
          <Team />
          <ConnectSection />
          {/* <Works/> */}
          <Footer />

        </>
      )}
    </div>
  );
}

export default App;
