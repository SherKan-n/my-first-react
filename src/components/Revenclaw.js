import React, { useState } from "react";




function Revenclaw() {
   const [founder, setFounder] = useState({
      firstName: 'Romina',
      lastName: 'Raven Claw'
   });

   function setVal(e) {
      setFounder({
         ...founder,
         firstName: e.target.value,
      });
   }

   function setVal2(e) {
      setFounder({
         ...founder,
         lastName: e.target.value
      });
   }

   return (
      <form>
         <br /><br />
         <input type="text" onChange={setVal}></input>
         <input type="text" onChange={setVal2}></input>

         <h3>Revenclaw founder is {founder.firstName}</h3>
         <h3>Revenclaw founder is {founder.lastName}</h3>
      </form>
   )
}




export default Revenclaw;