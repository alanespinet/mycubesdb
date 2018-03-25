import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CubeList from './CubeList';
import CubeSingle from './CubeSingle';
import AlgorithmSingle from './AlgorithmSingle';


class App extends React.Component {

  render(){
    return (
      <div>
        <h1>App</h1>
        <BrowserRouter>
          <div>
            <Route path="/" exact={true} component={CubeList} />
            <Route path="/cubes/:id" exact={true} component={CubeSingle} />
            <Route path="/cubes/:cid/:aid" exact={true} component={AlgorithmSingle} />
          </div>
        </BrowserRouter>
      </div>
    );
  }


}

export default App;
