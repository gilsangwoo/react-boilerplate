import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import rootReducer from './reducers';
import {createStore} from 'redux';
import {RouterMain} from './views/routers';
import './Root.scss';

const store = createStore(rootReducer);

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterMain />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
