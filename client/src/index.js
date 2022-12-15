import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { SocketContextProvider } from './contexts/SocketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  // <React.StrictMode>

    <BrowserRouter>

      <SocketContextProvider>

        <App />
        
      </SocketContextProvider>

    </BrowserRouter>
    
  // </React.StrictMode>

);
