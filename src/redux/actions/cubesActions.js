import axios from 'axios';


export const startSetCubes = () => {
  return (dispatch) => {
    return axios.get('/data/data.json')
      .then( (response) => { dispatch(setCubes(response.data.cubes)) })
      .catch( (error) => console.log(error) );
  }
}

export const setCubes = ( cubes ) => ({
  type: 'SET_CUBES',
  cubes: cubes
});


export const getSingleCube = ( cube_id ) => ({
  type: 'GET_SINGLE_CUBE',
  cube_id: cube_id
});
