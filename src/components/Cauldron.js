import { React, Component } from "react";
import { Mushroom, Mushroom2 } from './Mushroom';
import DragonScale from './DragonScale';
import HolyWater from './HolyWater';


class Cauldron extends Component {
   constructor() {
      super();
      this.state = {
         mushrooms: ['🍄'],
         dragonScales: [],
         holyWater: [],
      };
      this.handleMushroom2Click = this.handleMushroom2Click.bind(this);
      // this.handleDragonScaleClick = this.handleDragonScaleClick.bind(this);
      // this.handleHolyWaterClick = this.handleHolyWaterClick.bind(this);
   }

   handleMushroom2Click = (num) => {
      this.setState({ mushrooms: num });
   }

   // handleDragonScaleClick = (num) => {

   //    this.setState({ dragonScales: num });
   // }

   // handleHolyWaterClick = (num) => {

   //    this.setState({ holyWater: num });
   // }

   render() {
      return (
         <div>
            <h1>Cauldron</h1>
            <Mushroom mushroomHandler={this.handleMushroomClick} />
            <DragonScale dragonHandler={this.handleDragonScaleClick} />
            <HolyWater holywaterHandler={this.handleHolyWaterClick} />
            
            <Mushroom2 mushroom2Handler={this.handleMushroom2Click} />

            {this.state.mushrooms.map(item => item)}
         </div>
      );
   }
}



export default Cauldron;