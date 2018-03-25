import React from 'react';

export default (props) => (
  <div>
    <h2>{props.acase.case_name !== '' ? props.acase.case_name : 'Unique Case'}</h2>
    <img src={props.acase.case_image} />
    {props.acase.case_explanation !== '' ? <p>{props.acase.case_explanation}</p> : ''}
    <h3>{props.acase.case_moves}</h3>
  </div>
);
