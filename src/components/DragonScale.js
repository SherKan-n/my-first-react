
import React, { Component } from "react";




class DragonScale extends Component {
   constructor() {
      super();
      this.state = {
         dragons: ['🐉']
      };
   }

   handleClick() {
      const num = Math.floor(Math.random() * 5) + 1;
      let newDragon = [];
      for (let i = 0; i < num; i++) {
         newDragon.push('🐉');
      }
      this.setState({ dragons: newDragon });
   }


   render() {
      return (
         <div>
            <h3>Dragons</h3>
            <button onClick={() => this.handleClick()}>Add Dragons</button><br /><br />
            {this.state.dragons.map(item => item)}
         </div>
      );
   }
}


export default DragonScale;