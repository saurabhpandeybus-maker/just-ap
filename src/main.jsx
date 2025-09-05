import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import NetflixSeries from './components/NetflixSeries.jsx'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />

   <NetflixSeries />
 




  </StrictMode>,
)