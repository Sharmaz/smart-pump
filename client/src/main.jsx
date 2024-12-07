import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { User } from './User';
import App from './App';
import Login from './Login';
import Error from './Error';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <User>
      <BrowserRouter basename="/smart-pump">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users/:userId" element={<App />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </User>
  </React.StrictMode>,
);
