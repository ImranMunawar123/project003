import React from 'react';

// Gate Assignment

const Gate = ({isOpen}) => (
    <div style={{border: "2px solid #4c4c4c", marginTop: "15px"}}>
        <h5>Gate Task :</h5> 
        The Gate is <strong>{isOpen == true ? "Open" : "Closed"}</strong>
    </div>
    );

export default Gate;
