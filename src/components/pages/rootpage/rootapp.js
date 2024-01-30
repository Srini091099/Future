import React from 'react';
import { Provider } from 'react-redux';
import Filterpage from '../../extras/filterpage';
import store from '../../redux/store';

export function Rootapp() {
  return (
    <Provider store={store}>
      <div className="App">
        <Filterpage />
      </div>
    </Provider>
  );
}
