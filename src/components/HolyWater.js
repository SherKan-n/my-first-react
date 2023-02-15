
import React, { Component } from "react";




class HolyWater extends Component {
   constructor() {
      super();
      this.state = {
         water: ['💦']
      };
   }

   handleClick() {
      const num = Math.floor(Math.random() * 5) + 1;
      let newWater = [];
      for (let i = 0; i < num; i++) {
         newWater.push('💦');
      }
      this.setState({ water: newWater });
   }


   render() {
      return (
         <div>
            <h3>HolyWater</h3>
            <button onClick={() => this.handleClick()}>Add HolyWater</button><br /><br />
            {this.state.water.map(item => item)}
         </div>
      );
   }
}


export default HolyWater;