import React from "react";





function ChildIngredient(props) {
   return (
      <p>
         <button onClick={() => props.showRecipientHandler('dragon breath')}>Click</button>
      </p>
   );
}



export default ChildIngredient;



