import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './reducers';
import { fetchVaccineListSaga } from "./effects";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware]

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(fetchVaccineListSaga);

export default store;