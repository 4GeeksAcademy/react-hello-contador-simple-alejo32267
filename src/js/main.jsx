import React from 'react'
import ReactDOM from 'react-dom/client'


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import Home from './components/Home'
// components
const root = ReactDOM.createRoot(document.getElementById("root"));

let counter = 0;
setInterval(() => {
  root.render(<Home counter={counter} />);
  counter++;
}, 1000);