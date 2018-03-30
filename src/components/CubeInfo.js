import React from 'react';

export default (props) => (
  <div className="cube-info">
    <h1>{props.cube.cube_title}</h1>
    <div className="cube-info-wrapper">
      <img src={props.cube.cube_image}/>
      <p>{props.cube.cube_description}</p>
    </div>
  </div>
);
