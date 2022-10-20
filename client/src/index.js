import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initMiddleware } from 'devise-axios';
import AuthProvider from './providers/AuthProvider';
import PlantProvider from './providers/PlantProvider';
import PropogationProvider from './providers/PropogationProvider';
import WishlistProvider from './providers/WishlistProvider';
import NoteProvider from './providers/NoteProvider';


initMiddleware()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PlantProvider>
          <PropogationProvider>
            <WishlistProvider>  
              <NoteProvider>
                <App />
              </NoteProvider>
            </WishlistProvider>
          </PropogationProvider>
        </PlantProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
