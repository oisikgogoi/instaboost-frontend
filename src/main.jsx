import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Congratulations from './pages/Congratulations.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route exact path='/instagram/login' element={
      <App />}/>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/congrats' element={<Congratulations />}/>

    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
