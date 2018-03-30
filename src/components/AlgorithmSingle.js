import React from 'react';
import { connect } from 'react-redux';
import AlgorithmInfo from './AlgorithmInfo';
import CasesList from './CasesList';



class AlgorithmSingle extends React.Component {
  render(){
    const active_cube_id = this.props.match.params.cid;
    const active_alg_id = this.props.match.params.aid;

    if( !this.props.cube.cube_id || this.props.cube.cube_id !== active_cube_id ){
      return ( <div></div> );
    }

    const alg = this.props.cube.cube_algorithms.filter( alg => alg.algorithm_id === active_alg_id )[0];
    return (
      <div className="algorithm-single">
        <div className="container">
          <AlgorithmInfo alg={alg} />
          <CasesList cases={alg.algorithm_cases} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cube: state.selected_cube
});

export default connect(mapStateToProps)(AlgorithmSingle);
