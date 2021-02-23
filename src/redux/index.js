import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import application from './application';
import messages from './messages';
import contacts from './contacts';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  messages: messages,
  contacts: contacts,
  application: application,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
