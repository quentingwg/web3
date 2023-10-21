import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import AppLoader from './Components/App/AppLoader'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppLoader />
  </React.StrictMode>,
)
