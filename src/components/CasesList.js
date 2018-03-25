import React from 'react';
import CaseSingle from './CaseSingle';


export default (props) => (
  <div>
    {props.cases.map( (acase, index) =>
      <div key={index}>
        <CaseSingle acase={acase} />
      </div>
    )}
  </div>
);
