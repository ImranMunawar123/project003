import React from 'react';

const MediaCard = ({title,body,imageUrl}) => (
  <div style={{border: "2px solid #4c4c4c", marginTop: "15px"}}>
    <h5>Media Card Task :</h5>
    <h5 style={{color:"Purple"}}>{title}</h5>
    <p>{body}</p>
    <img src= {imageUrl} />
  </div>
);

export default MediaCard