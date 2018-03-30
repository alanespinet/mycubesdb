import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import CubeInList from './CubeInList';
import Title from './Title';

const CubeList = (props) => (
  <div className="cube-list">
    <div className="container">
      <Title />
      <ul>
        {props.cubes.map( (cube, index) =>
          <li key={index}>
            <NavLink to={`/cubes/${cube.cube_id}`}>
              <CubeInList cube={cube} />
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cubes: state.cubes
});

export default connect(mapStateToProps)(CubeList);
