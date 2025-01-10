if (__DEV__) {
  require('../ReactotronConfig.js');
}

import '../global.css';

import React from 'react';

import AppNavigator from './Navigators/App/AppNavigator';
import AppProvider from './Providers/AppProvider';

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}

export default App;
