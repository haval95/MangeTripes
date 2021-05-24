import { combineReducers } from "redux";
import tripReducer from "./Trips/TripReducer";

const rootReducer = combineReducers({
  trips: tripReducer,
});

export default rootReducer;
