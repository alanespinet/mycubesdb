import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import CubeList from './CubeList';
import CubeSingle from './CubeSingle';
import AlgorithmSingle from './AlgorithmSingle';
import Hero from './Hero';
import Header from './Header';
import Footer from './Footer';

export const history = createHistory();

class App extends React.Component {

  render(){
    return (
      <div>
        <Hero />
        <Header />
        <Router history={history}>
          <div>
            <Route path="/cubes" exact={true} component={CubeList} />
            <Route path="/cubes/:id" exact={true} component={CubeSingle} />
            <Route path="/cubes/:cid/:aid" exact={true} component={AlgorithmSingle} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }

}

export default App;
