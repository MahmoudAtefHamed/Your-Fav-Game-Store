import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './Components/App'
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import from node_modules
//direct start with folder name of package 
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
import App from "./App"
import "./App.css"

// Dynamically add the Font Awesome CDN link to the head
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
document.head.appendChild(link);

// import App from './Components/FunctionsWithEvents/AppAsFunctions';//Function Compoennt
// import AppAsClass from "./Components/ClassComponents/AppasClass"




const root = ReactDOM.createRoot(document.getElementById('root'));
//Render for varaible element with JSX value 
// root.render(App);

//render For function compoentn return JSX
// root.render(<App />)
//Render For Class component override Render function return JSX
root.render(<App />)

//Types OF Components ===>creation using React
//1-Variable Component
//2-Function Component
//3-Class Component 