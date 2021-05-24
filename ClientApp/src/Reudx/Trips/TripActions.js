import axios from "axios";

import {
  GET_ALL_TRIPS_ERROR,
  GET_ALL_TRIPS_REQUEST,
  GET_ALL_TRIPS_SUCCESS,
} from "./TripActionTypes";

const getTripSuccess = (payload) => ({ type: GET_ALL_TRIPS_SUCCESS, payload });
const getTripsRequest = () => ({ type: GET_ALL_TRIPS_REQUEST });
const getTripsError = (payload) => ({ type: GET_ALL_TRIPS_REQUEST });

export const getAllTrips = () => (dispatch) => {
  dispatch(getTripsRequest());
  return axios
    .get("api/Trips/getAll")
    .then((result) => {
      dispatch(getTripsSuccess(result.data));
    })
    .catch((error) => {
      dispatch(getTripsError("something went wrong"));
      return Promise.reject({});
    });
};
