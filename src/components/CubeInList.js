import React from 'react';

export default (props) => (
  <div className="cube-in-list">
    <img className="img-responsive" src={props.cube.cube_image} />
    <h2>{props.cube.cube_title}</h2>
  </div>
);
