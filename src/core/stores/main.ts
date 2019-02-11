import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, createStore, Store, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from '../reducers/main';
import {rootSaga} from '../sagas/main';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const combine = combineReducers({rootReducer});

export const store : Store < any > = createStore(combine, enhancer);
sagaMiddleware.run(rootSaga);
