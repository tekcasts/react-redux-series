import { combineReducers } from 'redux';

import vaccineReducer from './vaccineReducer';
import thunkReducer from './thunkReducer';
import sagaReducer from './sagaReducer';

export const rootReducer = combineReducers({
    vaccine: vaccineReducer,
    thunkdata: thunkReducer,
    sagadata: sagaReducer
});
