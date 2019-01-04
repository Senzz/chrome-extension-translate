import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../app';
import './todoapp.css';
import dva from '../../app/utils/dva'
import models from '../../app/models/index'

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');
  console.log('initialState', initialState);
  const dvaApp = dva.createApp({
    initialState: {
      app: initialState
    },
    models: models,
  });

  const store = dvaApp.getStore();
  
  ReactDOM.render(
    <App store={store} />,
    document.querySelector('#root')
  );
});
