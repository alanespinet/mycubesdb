import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App, { history } from './components/App';
import store from './redux/store/store';

import { startSetCubes } from './redux/actions/cubesActions';

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if( !hasRendered ){
    ReactDOM.render( jsx, document.getElementById('app') );
    hasRendered = true;
  }
};


ReactDOM.render(
  <p>loading...</p>,
  document.getElementById('app')
);

store.dispatch( startSetCubes() ).then( () => {
  renderApp();
  if( history.location.pathname === '/' )
    history.push('/cubes');
});
