import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import meetingsReducer from './meetings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  meetings: meetingsReducer,
});

export default entitiesReducer;
