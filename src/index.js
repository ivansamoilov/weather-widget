import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom';
import {  Provider  } from 'react-redux';
import App from './components/App/App';
import {store, persistor} from './services/storeConfig';


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);
