import React from 'react';
import { NavLink } from 'react-router-dom';


export default class AlgorithmList extends React.Component {
  render(){
    if( !this.props.cube.cube_algorithms ) { return (<div></div>); }
    return (
      <div>
        <ul>
          {this.props.cube.cube_algorithms.map( (alg, index) =>
            <li key={index}>
              <NavLink to={`/cubes/${this.props.cube.cube_id}/${alg.algorithm_id}`}>{alg.algorithm_title}</NavLink>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
