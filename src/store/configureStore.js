import { createStore, compose, combineReducers } from 'redux';
import { counterReducer, routinesReducer } from 'store/reducers';

function configureStore() {
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers =
    devtools && process.env.NODE_ENV === 'development' ? devtools : null || compose;

  const reducer = combineReducers({
    counter: counterReducer,
    routines: routinesReducer
  });
  const enhencer = composeEnhancers();
  const store = createStore(reducer, enhencer);

  return store;
}

export default configureStore;
