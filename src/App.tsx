import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import OverOnsPage from './pages/over-ons/OverOnsPage'
import DienstenPage from './pages/diensten/DienstenPage'
import PortfolioPage from './pages/portfolio/PortfolioPage'
import VacaturesPage from './pages/vacatures/VacaturesPage'
import ContactPage from './pages/contact/ContactPage'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/over-ons" element={<OverOnsPage />} />
          <Route path="/diensten" element={<DienstenPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/vacatures" element={<VacaturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
