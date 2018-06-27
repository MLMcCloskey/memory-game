import React, { Component } from "react";


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