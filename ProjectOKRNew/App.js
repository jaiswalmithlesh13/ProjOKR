import React from 'react';
import { Provider } from 'react-redux';

import AppStackNavigator from './app/container/navigation/index';
import store from './app/container/redux/store';

const App = () => {

    return (
      <Provider store={store}>
        <AppStackNavigator  />
       </Provider>
    );
  }


export default App;


