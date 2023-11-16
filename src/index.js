import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
/* GLOBAL VARIABLES */

window.$primaryLanguage = 'fr';
window.$secondaryLanguage = 'en';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

/* sauvegarder si le site est ou non en darkmode */
if (!localStorage["theme"]) {
    localStorage["theme"] = "light";
} else if (localStorage["theme"] === "dark") {
    localStorage["theme"] = "dark";
    var dataThemeAttribute = "data-theme";
    document.body.setAttribute(dataThemeAttribute, localStorage["theme"]);
}
function check_borders(){
    Array.from(document.getElementsByClassName("card")).forEach((card) => {
        let stylee = window.getComputedStyle(card.parentElement);
        let left = parseInt(stylee.getPropertyValue("left"));
        let width = parseInt(stylee.getPropertyValue("width"));
        let top = parseInt(stylee.getPropertyValue("top"));
        if (left+width+50 - window.innerWidth > 0){
            card.parentElement.style.left = left-width-(left+25 - window.innerWidth)+"px";
            localStorage[card.parentElement.id+"-x"] = left-width-(left+25 - window.innerWidth);
        }
        if (top < 0){
            card.parentElement.style.top = "0px";
            localStorage[card.parentElement.id+"-y"] = 0;
        }
    })
}
localStorage["z-index"] = 0;
window.addEventListener("resize",check_borders)
ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.register();
