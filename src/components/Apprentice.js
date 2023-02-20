import React from "react";





function Apprentice(props) {

   return (
      <div>
         Apprentice is {props.name}
         <button onClick={() => props.handlerShowAlert('magic')}>Show</button>
      </div>
   );
}



export default Apprentice;