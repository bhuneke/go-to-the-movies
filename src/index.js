import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

fetch('http://www.omdbapi.com/?s=Star%20Wars&plot=short&r=json')
  .then(res => res.json())
  .then(movies => {
    console.log(movies);
  })
  .catch();

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
