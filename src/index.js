import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClickOnLink from './components/ClickOnLink';
import Dashboard from './components/Dashboard';
import Actions from './components/Actions';
import AnotherActions from './components/AnotherActions';
import Signup from './components/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} /> 
        <Route path="/link" element={<ClickOnLink />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/anotheractions" element={<AnotherActions />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
