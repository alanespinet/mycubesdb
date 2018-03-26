const defaultState = {
  cubes: [],
  selected_cube: {}
};


const cubesReducer = ( state = defaultState, action ) => {
  switch( action.type ){
    case 'SET_CUBES':
      return {
        ...state,
        cubes: action.cubes
      }

    case 'GET_SINGLE_CUBE':
      return {
        ...state,
        selected_cube: state.cubes.filter( cube => cube.cube_id === action.cube_id )[0]
      }

    default:
      return state;
  }
}

export default cubesReducer;
