// import React, { Component } from 'react';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     console.log("hello");
//   };

//   state = {
//     count: 0
//   };

//   add = () => {
//     this.setState(current => ({ count: current.count + 1 }));//setState를 호출할 때마다 render함수를 call한다. 
//     console.log("add");
//   }

//   minus = () => {
//     this.setState(current => ({ count: current.count - 1 }));
//     console.log("minus");
//   }

//   componentDidMount() {
//     console.log("component rendered");
//   }

//   componentDidUpdate() {
//     console.log("I just updated");
//   }

//   render() {
//     console.log("i'm rendering")
//     return (
//       <div>
//         <h1>the number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }

// }

// export default App;