
import { render } from 'react-dom';
import React from 'react';
import App from '../../injectApp';
import dva from '../../injectApp/utils/dva'
import models from '../../injectApp/models/index'

window.addEventListener('load', () => {
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

    const injectDOM = document.createElement('div');
    injectDOM.className = 's-translate';
    injectDOM.style.textAlign = 'center';
    document.body.appendChild(injectDOM);
    render(<App store={store} />, injectDOM);
  });
});
