import { React, Component } from "react";
import Invocation from "./Invocation";



class HogwartsLetter extends Component {
   constructor() {
      super();
      this.state = {
         magicalStatus: "Muggle"
      }
   }

   render() {
      return (
         <div>
            <p>Welcome {this.state.magicalStatus}!</p>
            <button onClick={() => this.setState({ magicalStatus: 'Muggle ia trenul' })}>Take the Train</button>
            <Invocation name={this.state.magicalStatus} potion="test" />
         </div>
      );
   }
}




export default HogwartsLetter;