import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCqsZBf0I9IXVi7-iAOo3gyJ4e0crZDnvo&callback=initMap';
script.async = true;

let map;
// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
  if (!map) {
    map = new window.google.maps.Map(document.getElementById("map"), {
     center: { lat: 43.6532, lng: -79.3832 },
     zoom: 18,
   });
  }

};

// Append the 'script' element to 'head'
document.head.appendChild(script);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
