import React from "react";





function Sumoning(props) {
   console.log(props);

   return (
      <p>
         Proffesor {props.name} is the potion {props.potion} teacher
      </p>
   );
}



export default Sumoning;


// export const Sumoning = () => <p>Proffesor Tibi is the potion teacher</p>;

