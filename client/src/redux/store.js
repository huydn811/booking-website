import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './saga';

export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();
const middlewares = [routerMiddleware(history), sagaMiddleware];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(sagas);

export default store;
