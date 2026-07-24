import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from "react"
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'
import FreeMVP from './Pages/FreeMVP'
import './App.css'

function App() {

  const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

  return (
    <HashRouter>
    <ScrollToTop />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/free-mvp" element={<FreeMVP />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<h1 className="text-white text-center mt-5">404 Page not found</h1>} />
        </Routes>
      </main>
      <footer className="site-footer">
        © 2026 Dvithro Software Solutions & Services
      </footer>
    </HashRouter>
  )
}

export default App
