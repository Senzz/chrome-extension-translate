import { create } from 'dva-core';

let app
let store
let dispatch
let registered

function createApp(opt) {
  // redux日志
  app = create(opt)
  if (!registered) opt.models.forEach(model => app.model(model))
  registered = true;
  app.start();

  store = app._store
  app.getStore = () => store
  app.use({
    onError(err) {
      console.log(err)
    },
  })

  dispatch = store.dispatch

  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  }
}