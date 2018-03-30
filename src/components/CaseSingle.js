import React from 'react';

export default (props) => (
  <div className="case-single">
    <h2>{props.acase.case_name !== '' ? props.acase.case_name : 'Unique Case'}</h2>
    <div className="case-single-info-wrapper">
      <div className="case-single-image">
        <img src={props.acase.case_image} className="img-responsive" />
      </div>

      <div className="case-single-text">
        {props.acase.case_explanation !== '' ? <p>{props.acase.case_explanation}</p> : ''}
        <h3>{props.acase.case_moves}</h3>
      </div>
    </div>
  </div>
);
