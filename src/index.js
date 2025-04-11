import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StudentContext from './util/StudentContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StudentContext>
        <App />
    </StudentContext>
  

);


