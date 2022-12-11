import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/noto-sans'
import '@fontsource/poppins'
import './App.css'
import Layout from './layout/Layout'
import Home from './Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
)
