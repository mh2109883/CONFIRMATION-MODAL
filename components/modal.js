import React from "react";
import "./modal.css";


function Modal({ setOpenmodal }) {
  return (
    <div className="background">
      <div className="content">
        <div className="closebutton">
          <button  onClick={() => {setOpenmodal(false);}}>x</button>
        </div>
        <div className="title">
          <h1>Eid Mubarak<br></br>-While cool:Code</h1>
        </div>
        <div className="body">
          <p>
          </p>
        </div>
        <div className="footer">
          <button onClick={() => {setOpenmodal(false);}}id="cancel">Cancel</button>
          <button id="continue">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;