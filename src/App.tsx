import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import OverOnsPage from './pages/over-ons/OverOnsPage'
import DienstenPage from './pages/diensten/DienstenPage'
import PortfolioPage from './pages/portfolio/PortfolioPage'
import VacaturesPage from './pages/vacatures/VacaturesPage'
import ContactPage from './pages/contact/ContactPage'
import './App.css'

function App() {
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
