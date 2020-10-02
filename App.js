import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Surya from './surya.js';

// function App() {

//     return React.createElement('h2','null','Raja');
//     return React.createElement('h2',{style:{color:"red"}},'Raja');
   

//     return <div><h2>Surya</h2><h2>Narla</h2></div>

// }

// class App extends React.Component{
//   render(){
//     return(
//       React.createElement('div',null,'surya')
//        React.createElement('div',null,React.createElement('h2',null,'surya'))
//        React.createElement('div',{style:{background:'yellow'}},React.createElement('h2',null,React.createElement('p',null,'Rajesh')))
//        React.createElement('div',{id:'surya'},React.createElement('h2',null,React.createElement('p',null,'Rajesh')))


//       );
//   }
// }

// function App(){
//   const x=(
//     <div>
//     <h1>surya</h1>
//     <h1>Narla</h1>

//     </div>
//   );
//   return(
// ReactDOM.render(x,document.getElementById('root'))
//   )
// }

class App extends React.Component{
  render(){
    return(
      <div>
      <Surya name="Alice" role="develpoer"></Surya>
      <Surya name="Bob" role="trainer"></Surya>

      </div>
      );
  }
}
  

export default App;
