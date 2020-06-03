import React from 'react';

//Print Name With Plain Function

function PlainFunction({firstName,lastName}){
  return <div style={{border: "2px solid #4c4c4c"}}>
    <h5>Simple Function With Some Styles :</h5>
    <p style={{fontSize: "18px", color: "darkred"}}>Hello, My name is <strong>{firstName} {lastName}</strong>! This a basic example from Dev Ceddia React Tutorial</p>
    </div>;
}

export default PlainFunction