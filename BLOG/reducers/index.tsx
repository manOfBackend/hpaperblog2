
import { combineReducers } from 'redux';

import Forms from './Forms';

const rootReducer = combineReducers({
    Forms,
    
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;