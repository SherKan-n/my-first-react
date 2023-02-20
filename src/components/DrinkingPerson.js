import React, { useState } from "react";




function DrinkingPerson() {
   const [isAdult] = useState(true);

   return (
      <div>
         {isAdult && 'vin'}
      </div>
   )
}




export default DrinkingPerson;