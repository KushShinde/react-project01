import React from 'react';
import ReactDOM from 'react-dom/client';
import Tourism from './Tourism';
import Fitness from './Fitness';
import Technology from './Technnology';
import Food from './Food'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<Routes>
<Route path="/" element={<App />} />
<Route path="/Tourism" element={<Tourism/>} />
<Route path="/Fitness" element={<Fitness/>} />
<Route path="/Technology" element={<Technology/>} />
<Route path="/Food" element={<Food/>} />
<Route path="/Fitness/Layout" element={<Layout/>} />

</Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
