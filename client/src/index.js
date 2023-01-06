import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './components/personal/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="register" element={< Register />}></Route>
  </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

