import { combineReducers } from "redux";

import overviewReducer from "./ducks/accreditation/overview";

export default combineReducers({
  overviewStore: overviewReducer,
});
