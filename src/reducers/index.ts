import {combineReducers} from 'redux';
import {default as title} from './ReducerTitle';
import {default as user} from './ReducerUser';

const rootReducer = combineReducers({
  title,
  user,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
