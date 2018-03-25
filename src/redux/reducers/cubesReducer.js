const defaultState = {
  cubes: [
    {
      cube_id: "x3cube",
      cube_title: "3 x 3 x 3 (classic)",
      cube_image: "/images/placeholder_cube.jpg",
      cube_description: "lorem ipsum cube description text",
      cube_algorithms: [
        {
          algorithm_id: "pll",
          algorithm_title: "PLL",
          algorithm_description: "lorem ipsum cube algorithm description",
          algorithm_cases: [
            {
              case_name: "pez arriba",
              case_image: "/images/placeholder.jpg",
              case_explanation: "lorem ipsum case explanation",
              case_moves: "R 2U R' U' R U' R'"
            }, {
              case_name: "pez abajo",
              case_image: "/images/placeholder.jpg",
              case_explanation: "lorem ipsum case explanation",
              case_moves: "R U R' U R 2U R'"
            }
          ]
        }, {
          algorithm_id: "oll",
          algorithm_title: "OLL",
          algorithm_description: "lorem ipsum cube algorithm description",
          algorithm_cases: [
            {
              case_name: "intercambio frontal",
              case_image: "/images/placeholder.jpg",
              case_explanation: "lorem ipsum case explanation",
              case_moves: "R 2U R' U' R U' R'"
            }
          ]
        }
      ]
    }, {
      cube_id: "x2cube",
      cube_title: "2 x 2 x 2",
      cube_image: "/images/placeholder_cube.jpg",
      cube_description: "lorem ipsum cube description text",
      cube_algorithms: [
        {
          algorithm_id: "lastlayer",
          algorithm_title: "Last layer",
          algorithm_description: "lorem ipsum cube algorithm description",
          algorithm_cases: [
            {
              case_name: "",
              case_image: "/images/placeholder.jpg",
              case_explanation: "",
              case_moves: "L B L 2F L' B' L 2F 2L"
            }
          ]
        }
      ]
    }, {
      cube_id: "x4cube",
      cube_title: "4 x 4 x 4",
      cube_image: "/images/placeholder_cube.jpg",
      cube_description: "lorem ipsum cube description text",
      cube_algorithms: [
        {
          algorithm_id: "p4me",
          algorithm_title: "Parity One - Mixed Edges",
          algorithm_description: "lorem ipsum cube algorithm description",
          algorithm_cases: [
            {
              case_name: "",
              case_image: "/images/placeholder.jpg",
              case_explanation: "lorem ipsum case explanation",
              case_moves: "L B L 2F L' B' L 2F 2L"
            }
          ]
        }, {
          algorithm_id: "p4yc",
          algorithm_title: "Parity Two - Yellow Cross",
          algorithm_description: "lorem ipsum cube algorithm description",
          algorithm_cases: [
            {
              case_name: "",
              case_image: "/images/placeholder.jpg",
              case_explanation: "lorem ipsum case explanation",
              case_moves: "L B L 2F L' B' L 2F 2L"
            }
          ]
        }, {
          algorithm_id: "p4c",
          algorithm_title: "Parity Three - Corners",
          algorithm_description: "lorem ipsum cube algorithm description",
          algorithm_cases: [
            {
              case_name: "",
              case_image: "/images/placeholder.jpg",
              case_explanation: "lorem ipsum case explanation",
              case_moves: "L B L 2F L' B' L 2F 2L"
            }
          ]
        }
      ]
    }, {
      cube_id: "x5cube",
      cube_title: "5 x 5 x 5",
      cube_image: "/images/placeholder_cube.jpg",
      cube_description: "lorem ipsum cube description text",
      cube_algorithms: [
        {
          algorithm_id: "p5me",
          algorithm_title: "Parity One - Mixed Edges",
          algorithm_description: "lorem ipsum cube algorithm description",
          algorithm_cases: [
            {
              case_name: "",
              case_image: "/images/placeholder.jpg",
              case_explanation: "lorem ipsum case explanation",
              case_moves: "L B L 2F L' B' L 2F 2L"
            }
          ]
        }, {
          algorithm_id: "p5ei",
          algorithm_title: "Parity Two - Edges Interchange",
          algorithm_description: "lorem ipsum cube algorithm description",
          algorithm_cases: [
            {
              case_name: "",
              case_image: "/images/placeholder.jpg",
              case_explanation: "lorem ipsum case explanation",
              case_moves: "L B L 2F L' B' L 2F 2L"
            }
          ]
        }
      ]
    }, {
      cube_id: "x6cube",
      cube_title: "6 x 6 x 6",
      cube_image: "/images/placeholder_cube.jpg",
      cube_description: "lorem ipsum cube description text",
      cube_algorithms: [
        {
          algorithm_id: "p6me",
          algorithm_title: "Parity One - Mixed Edges",
          algorithm_description: "lorem ipsum cube algorithm description",
          algorithm_cases: [
            {
              case_name: "",
              case_image: "/images/placeholder.jpg",
              case_explanation: "lorem ipsum case explanation",
              case_moves: "L B L 2F L' B' L 2F 2L"
            }
          ]
        }, {
          algorithm_id: "p6ei",
          algorithm_title: "Parity Two - Edges Interchange",
          algorithm_description: "lorem ipsum cube algorithm description",
          algorithm_cases: [
            {
              case_name: "",
              case_image: "/images/placeholder.jpg",
              case_explanation: "lorem ipsum case explanation",
              case_moves: "L B L 2F L' B' L 2F 2L"
            }
          ]
        }, {
          algorithm_id: "p6yc",
          algorithm_title: "Parity Three - Yellow Cross",
          algorithm_description: "lorem ipsum cube algorithm description",
          algorithm_cases: [
            {
              case_name: "",
              case_image: "/images/placeholder.jpg",
              case_explanation: "lorem ipsum case explanation",
              case_moves: "L B L 2F L' B' L 2F 2L"
            }
          ]
        }, {
          algorithm_id: "p6c",
          algorithm_title: "Parity Four - Corners",
          algorithm_description: "lorem ipsum cube algorithm description",
          algorithm_cases: [
            {
              case_name: "",
              case_image: "/images/placeholder.jpg",
              case_explanation: "lorem ipsum case explanation",
              case_moves: "L B L 2F L' B' L 2F 2L"
            }
          ]
        }
      ]
    }
  ],
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
