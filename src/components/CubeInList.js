import React from 'react';

export default (props) => (
  <div>
    <img src={props.cube.cube_image} />
    <h2>{props.cube.cube_title}</h2>
  </div>
);
