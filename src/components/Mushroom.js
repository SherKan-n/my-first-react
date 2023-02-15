
import React, { Component } from "react";
// import axios from 'axios';


class Mushroom extends Component {
   constructor() {
      super();
      this.state = {
         mushrooms: ['🍄']
      };
   }

   handleClick() {
      const num = Math.floor(Math.random() * 5) + 1;
      let newMushrooms = [];
      for (let i = 0; i < num; i++) {
         newMushrooms.push('🍄');
      }
      this.setState({ mushrooms: newMushrooms });
   }

   render() {
      return (
         <div>
            <h3>Mushroom</h3>
            <button onClick={() => this.handleClick()}>Add mushrooms</button><br /><br />
            {this.state.mushrooms.map(item => item)}
         </div>
      );
   }
}


function Mushroom2(props) {
   const generateRandomMushroom = () => {
      const num = Math.floor(Math.random() * 5) + 1;
      let newMushrooms = [];
      for (let i = 0; i < num; i++) {
         newMushrooms.push('🍄');
      }
      return newMushrooms;
   }

   return (
      <div>
         <p>Mushroom2</p>
         <button onClick={() => props.mushroom2Handler(generateRandomMushroom())}>Click</button>
      </div>
   );
}


export { Mushroom, Mushroom2 };





