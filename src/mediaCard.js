import React from 'react';

const MediaCard = ({title,body,imageUrl}) => (
  <div style={{marginTop: "10px"}}>
    <h4 style={{textDecoration: "underline"}}>Media Card Task :</h4>
    <h5 style={{color:"Purple"}}>{title}</h5>
    <p>{body}</p>
    <img src= {imageUrl} />
  </div>
);

export default MediaCard