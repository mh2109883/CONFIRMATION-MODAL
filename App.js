import React, { useState } from "react";
import "./App.css";
import Modal from "./components/modal";

function App() {
  const [openmodal, setOpenmodal] = useState(false);

  return (
    <div className="body " >
      <div className="web">
       
          <h1 className="text" id="text1">Welcome to Our Home Page.!!!</h1>
          <h1 className="text" id="text2">Alhamdulillah.. Happy to be a Part of this Journey..!!!</h1>
          <h1 className="text" id="text3">Don't Forget to Open the template..Greetings from Us</h1>
          
        <button className="openmodalbutton" onClick={() => {setOpenmodal(true);}}>Open</button>

        {openmodal && <Modal setOpenmodal={setOpenmodal}/>}
      </div>
    </div>
  );
}

export default App;