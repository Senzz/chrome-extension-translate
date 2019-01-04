export default {
  namespace: 'app',

  state: {
  },

  subscriptions: {
    async setup({ dispatch }) {
      await dispatch({
        type: 'fetchInfo'
      });
    },
  },

  effects: {
    *fetchInfo(_, { put, select }) {
      console.log('fetchInfo')
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
