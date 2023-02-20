import React, { useState } from "react";




function Revenclaw() {
   const [founder, setFounder] = useState({
      firstName: 'Romina',
      lastName: 'Raven Claw'
   });

   function setVal(e) {
      setFounder({
         firstName: e.target.value,
         lastName: founder.lastName,
      });
   }

   function setVal2(e) {
      setFounder({
         firstName: founder.firstName,
         lastName: e.target.value
      });
   }

   return (
      <form>
         <input type="text" onKeyUp={setVal}></input>
         <input type="text" onKeyUp={setVal2}></input>

         <h3>Revenclaw founder is {founder.firstName}</h3>
         <h3>Revenclaw founder is {founder.lastName}</h3>
      </form>
   )
}




export default Revenclaw;