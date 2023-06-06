import {combineReducers} from 'redux';
import userSlice from '../slice/user';
import navSlice from '../slice/nav';
const rootReducer = combineReducers({
  user: userSlice.reducer,
  nav : navSlice.reducer,
});

export default rootReducer;
