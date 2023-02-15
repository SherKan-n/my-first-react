import { React, Component } from "react";
import ChildIngredient from "./ChildIngredient";


class ParentPotion extends Component {
   constructor() {
      super();
      this.state = {
         name: "fire"
      }
      this.showRecipient = this.showRecipient.bind(this);
   }

   showRecipient(ingredients) {
      alert(`This potion is ${this.state.name} and ${ingredients}`);
   }

   render() {
      return (
         <div>
            <ChildIngredient showRecipientHandler={this.showRecipient} />
         </div>
      );
   }
}



export default ParentPotion;