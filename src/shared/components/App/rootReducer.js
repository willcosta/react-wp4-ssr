import { combineReducers } from 'redux';

import HomePageReducer from '../HomePage/reducer';

const rootReducer = combineReducers({
  home: HomePageReducer
});

export default rootReducer;
