import React from 'react';
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
// import Sumoning from "./components/Sumoning";
// import Invocation from "./components/Invocation";
// import HogwartsLetter from './components/HogwartsLetter';


import './App.css';
import Cauldron from './components/Cauldron';
// import ParentPotion from './components/ParentPotion';

function App() {
  return (
    <div className="App">
      {/* <Sumoning name='noneee' potion='poison' />
      <Invocation name='invocation1' potion='foc' />
      <Invocation name='invocation2' potion='apa' />
      <Invocation name='invocation3' potion='pamant' />
      <Sumoning name='tibi' potion='fire' />
      <Sumoning name='test' potion='ice' /> */}
      {/* <HogwartsLetter /> */}
      {/* <ParentPotion /> */}
      <Cauldron />
    </div>
  );
}


/* Diferente intre class and funtion components:
  1. syntax
  2. has state (class base), manage state through useState HOOK
  3. 'this' present only in class

  class -> className


  Differecene between props and state 

  1. props get passed to the component and state is managed to within the component
  2. props is immutable, state is mutable
  3. syntax: - functional components => props
             - class base components => this.props

             - functional components => HOOK - useState
             - class base components => this.state
*/


export default App;
