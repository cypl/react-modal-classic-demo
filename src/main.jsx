import React from 'react'
import ReactDOM from 'react-dom/client'
import { ModalProvider } from 'react-modal-classic'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
)
