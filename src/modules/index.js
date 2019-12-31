import { combineReducers } from 'redux';
import counter from './counter';
import blog from './blog';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) => {
  return combineReducers({
    counter: counter,
    blog: blog,
    router: connectRouter(history),
  })
}

export default createRootReducer;