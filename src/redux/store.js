import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import mainPage from './reducers/mainPage';

const reducers = combineReducers({
  main: mainPage,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;