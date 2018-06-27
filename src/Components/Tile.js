import React, { Component } from "react";
// import images from '../assets/images/imageIndex'
import daniel from '../assets/images/daniel.png';
import emily from '../assets/images/emily.png';
import jack from '../assets/images/jack.png';
import jay from '../assets/images/jay.png';
import john from '../assets/images/john.png';
import jose from '../assets/images/Jose.png';
import randy from '../assets/images/randy.png';
import sabu from '../assets/images/sabu.png';
import thomas from '../assets/images/thomas.png';
import tony from '../assets/images/tony.png';
import vanessa from '../assets/images/vanessa.png';
import winston from '../assets/images/winston.png';

const handleChosen = () => {
  // e.preventDefault();
  console.log('The button was clicked');
  this.setState({ chosen: true, score: this.state.score + 1 });
  shuffleArray(images);
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
}

const images = [
  { alt: "Daniel", src: daniel, id: 1, onClick: handleChosen },
  { alt: "emily", src: emily, id: 2, onClick: handleChosen },
  { alt: "jack", src: jack, id: 3, onClick: handleChosen },
  { alt: "jay", src: jay, id: 4, onClick: handleChosen },
  { alt: "john", src: john, id: 5, onClick: handleChosen },
  { alt: "jose", src: jose, id: 6, onClick: handleChosen },
  { alt: "randy", src: randy, id: 7, onClick: handleChosen },
  { alt: "sabu", src: sabu, id: 8, onClick: handleChosen },
  { alt: "thomas", src: thomas, id: 9, onClick: handleChosen },
  { alt: "tony", src: tony, id: 10, onClick: handleChosen },
  { alt: "vanessa", src: vanessa, id: 11, onClick: handleChosen },
  { alt: "winston", src: winston, id: 12, onClick: handleChosen },
]



// class Tile extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     chosen: false,
//     score: 0,
//   }
//   // this.handleChosen = this.handleChosen.bind(this);
// }
// // props = {...props}

// shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
//   }
// }

// handleChosen = () => {
//   // e.preventDefault();
//   console.log('The button was clicked');
//   this.setState({ chosen: true, score: this.state.score + 1 });
//   shuffleArray(images);
// }

// console.log(props)

// render() {

// class Tile extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     chosen: false,
//     score: 0,
//   }
function Tile(props) {
  return (
    <div className="photos">
      <ul>
        <li>
          <a >
            <img className="images"
              src={props.src}
              alt={props.alt}
              id={props.id}
              chosen={props.chosen}
              onClick={props.onClick} />
          </a>
        </li>
      </ul>
    </div>
  );
}
// }

export default Tile;

// class Tile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = this.state.bind(this);
//     this.onClick = this.onClick.bind(this);
//   }
//     state = {
//       chosen: false,
//     }
  
//   render() {
//     return (
//       <div className="photos">
//         <ul>
//           <li>
//             <a >
//               <img className="images"
//                 src={this.state.src}
//                 alt={this.state.alt}
//                 // id={props.id}
//                 chosen={this.state.chosen}
//                 onClick={this.onClick} />
//             </a>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }