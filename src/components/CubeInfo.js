import React from 'react';

export default (props) => (
  <div>
    <h1>{props.cube.cube_title}</h1>
    <img src={props.cube.cube_image}/>
    <p>{props.cube.cube_description}</p>
  </div>
);
