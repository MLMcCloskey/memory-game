import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import images from './Components/Tile'
import Memory from './Components/Memory';
import Images from './Components/Images';

// import daniel from './assets/images/daniel.png';
// import emily from './assets/images/emily.png';
// import jack from './assets/images/jack.png';
// import jay from './assets/images/jay.png';
// import john from './assets/images/john.png';
// import jose from './assets/images/Jose.png';
// import randy from './assets/images/randy.png';
// import sabu from './assets/images/sabu.png';
// import thomas from './assets/images/thomas.png';
// import tony from './assets/images/tony.png';
// import vanessa from './assets/images/vanessa.png';
// import winston from './assets/images/winston.png';



// const images = [
//     {alt: "Daniel", src: daniel, id: 1},
//     {alt: "emily", src: emily, id: 2},
//     {alt: "jack", src: jack, id: 3},
//     {alt: "jay", src: jay, id: 4},
//     {alt: "john", src: john, id: 5},
//     {alt: "jose", src: jose, id: 6},
//     {alt: "randy", src: randy, id: 7},
//     {alt: "sabu", src: sabu, id: 8},
//     {alt: "thomas", src: thomas, id: 9},
//     {alt: "tony", src: tony, id: 10},
//     {alt: "vanessa", src: vanessa, id: 11},
//     {alt: "winston", src: winston, id: 12},
// ]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
}

shuffleArray(Images);


ReactDOM.render(<Memory tiles={Images}/>, document.getElementById('root'));
registerServiceWorker();
