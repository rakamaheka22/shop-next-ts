import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Logger } from '../middleware/logger';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(Logger)
));

export default store;
