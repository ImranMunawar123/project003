import React from 'react';

//Print Name With Plain Function

function PlainFunction({firstName,lastName}){
  return <div>
    <h4 style={{textDecoration: "underline"}}>Plain Function Task :</h4>
    <p style={{fontSize: "18px", color: "darkred"}}>Hello, My name is <strong>{firstName} {lastName}</strong>! This a basic example from Dev Ceddia React Tutorial</p>
    </div>;
}

export default PlainFunction