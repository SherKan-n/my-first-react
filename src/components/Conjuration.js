import React from "react";


function goPage() {
   window.open('https://www.google.com');
}


const Conjuration = () => {
   return React.createElement("div", null, (
      <div>
         Potion delails <span onClick={goPage} style={{ cursor: 'pointer', color: "red" }}>Press Here</span>
      </div>
   ));
}


export default Conjuration;