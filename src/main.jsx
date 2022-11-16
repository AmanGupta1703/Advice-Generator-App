import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "./responsive.css";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <main>
    <App />
    <Footer />
  </main>
)
