import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

window.scrollTo(0, 0);
createRoot(document.getElementById('root')).render(<App />);
