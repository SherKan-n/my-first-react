import { React, Component } from "react";
import Conjuration from './Conjuration';






class Invocation extends Component {
   render() {
      return (
         <div>
            <p>Invocation Potion {this.props.potion}, Name  {this.props.name}</p>
            <Conjuration />
         </div>
      );
   }
}


export default Invocation;