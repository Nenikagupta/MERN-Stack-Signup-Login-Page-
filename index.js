import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//some styling



const selectElement=(s) =>document.querySelector(s);
const navLinks=document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () =>{
  selectElement(".nav-list").classList.toggle("active");
  selectElement(".burger-menu-icon").classList.toggle("toggle");

  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation=""
    }else{
      link.style.animation="navLinkAnimate 2.4s ease forwards 0.2s";
    }
  })

});
