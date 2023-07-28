import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Common/Navbar'
import routes from './router'
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API;

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
