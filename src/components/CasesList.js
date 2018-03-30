import React from 'react';
import CaseSingle from './CaseSingle';


export default (props) => (
  <div className="cases-list">
    {props.cases.map( (acase, index) =>
      <div key={index} className="cases-list-child">
        <CaseSingle acase={acase} />
      </div>
    )}
  </div>
);
