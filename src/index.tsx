import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppStoreContext } from './store/useAppStore';

ReactDOM.render(
  <React.StrictMode>
        {/* <AppStoreContext.Provider value={{ appStore }}> */}
          <App />
        {/* </AppStoreContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
