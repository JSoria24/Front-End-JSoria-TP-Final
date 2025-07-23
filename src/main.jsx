import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import './index.css'
import ContactContextProvider from './Context/ContactContext.jsx'
import AppThemeContextProvider from './Context/AppThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  /* Browser router es un componente que nos habilita a usar las herramientas de react-router */
  <BrowserRouter>
    <AppThemeContextProvider>
      <ContactContextProvider>
        <App />
      </ContactContextProvider>

    </AppThemeContextProvider>
  </BrowserRouter>
)