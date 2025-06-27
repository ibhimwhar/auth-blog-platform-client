import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router"
import { ContainerContext } from './component/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContainerContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContainerContext>
  </StrictMode>,
)
