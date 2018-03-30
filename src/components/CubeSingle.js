import React from 'react';
import { connect } from 'react-redux';

import { getSingleCube } from '../redux/actions/cubesActions';
import CubeInfo from './CubeInfo';
import AlgorithmList from './AlgorithmList';

class CubeSingle extends React.Component {

  render(){
    this.props.get_cube();

    return (
      <div className="cube-single">
        <div className="container">
          <CubeInfo cube={this.props.cube} />

          <h3>Related Algorithms:</h3>  
          <AlgorithmList cube={this.props.cube} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  cube: state.selected_cube
});

const mapDispatchToProps = (dispatch, props) => ({
  get_cube: ( cube_id ) => dispatch( getSingleCube(props.match.params.id) )
});

export default connect(mapStateToProps, mapDispatchToProps)(CubeSingle);
