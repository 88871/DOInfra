import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css'
import App from './App.tsx'

// Get the root element
const rootElement = document.getElementById('root')!
rootElement.style.width = '100%'
rootElement.style.maxWidth = '100%'
rootElement.style.margin = '0'
rootElement.style.padding = '0'

createRoot(rootElement).render(
  <StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </StrictMode>,
)
