import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Common/Navbar'
import routes from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {
          routes.map(e => {
            return <Route path={e.path} Component={e.component} key={e.path} />
          })
        }
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
