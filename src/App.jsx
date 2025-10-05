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
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePages';
import CareersPage from './pages/CareersPage';
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

  if (loading) {
    return <Loader/>;
  }

  return (
    <div className="font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/careers" element = {<CareersPage/>} />
          </Routes>
    </div>
  );
}

export default App;
