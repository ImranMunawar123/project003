import React from 'react';

const ArrowFunction = ({firstName, lastName}) => (
<div style={{marginTop: "10px"}}>
    <h4 style={{textDecoration: "underline"}}>Arrow Function Task :</h4>
    I am <strong>{firstName} {lastName}</strong> and I used Arrow Function to print this.
</div>
);

export default ArrowFunction