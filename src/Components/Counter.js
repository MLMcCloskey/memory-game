import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
// class Counter extends React.Component {
//   // Setting the initial state of the Counter component
//   state = {
//     score: 0
//   };

//   // handleIncrement increments this.state.count by 1
//   handleIncrement = () => {
//     // We always use the setState method to update a component's state
//     this.setState({ score: this.state.score + 1 });
//   };

//   handleDecrement = () => {
//       this.setState({ score: 0});
//   }

//   // The render method returns the JSX that should be rendered
//   render() {
//     return (
      
//           <span className="text-center"> Your Score: {this.state.score}</span>
        
//     );
//   }
// }



const Counter = props => (
    <span className="text-center"> Your Score: {props.score}</span>
  )

export default Counter;