import React, { Component } from "react";
import Apprentice from "./Apprentice";




class Wizard extends Component {
   showAlertParent(arg) {
      alert("dark wizard " + arg);
   }


   render() {
      return (
         <div>
            Dark Wizard<br />
            <Apprentice name="john" handlerShowAlert={this.showAlertParent} />
         </div>
      );
   }

}



export default Wizard;