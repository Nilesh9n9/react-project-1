import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import chatsReducer from './chatsListSlice/ChatsListSlice';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from '../redux-observable/rootEpic';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    chatsList: chatsReducer,
  },
  middleware : (getDefaultMiddleware) => [
    ...getDefaultMiddleware({thunk: false}),
    epicMiddleware
  ] 
});

epicMiddleware.run(rootEpic);

export default store;