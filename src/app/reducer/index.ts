import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {heroes} from './heroes';

export const reducers = combineReducers({
    routing: routerReducer,
    heroes
});