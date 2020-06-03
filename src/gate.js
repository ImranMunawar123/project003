import React from 'react';

// Gate Assignment

const Gate = ({isOpen}) => (
    <div style={{marginTop: "10px",marginBottom: "20px"}}>
        <h4 style={{textDecoration: "underline"}}>Gate Task :</h4>
        The Gate is <strong style={{color: "darkgreen"}}>{isOpen === true ? "Open" : "Closed"}</strong>
    </div>
    );

export default Gate;
