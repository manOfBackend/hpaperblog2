
import { combineReducers } from 'redux';

import Forms from './Forms';
import Movies from './Movies'

const rootReducer = combineReducers({
    Forms,
    Movies,
    
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;