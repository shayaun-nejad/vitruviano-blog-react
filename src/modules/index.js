import { combineReducers } from 'redux';
import counter from './counter';
import { connectRouter } from 'connected-react-router';
import * as History from 'history';

const history = History.createBrowserHistory()

export default combineReducers({
  counter: counter,
  router: connectRouter(history),
})