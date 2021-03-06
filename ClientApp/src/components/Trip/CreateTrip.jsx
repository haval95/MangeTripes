import React, { useState } from "react";
import "../../custom.css";
import { useHistory } from "react-router";
import axios from "axios";
export default function CreateTrip() {
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    description: "",
    dateStarted: "",
    dateCompleted: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let dataObj = {
      id: Math.floor(Math.random() * 1000),
      ...state,
    };
    axios.post("api/Trips/AddTrip", dataObj).then((result) => {
      history.push("/trips");
    });
    setState({
      name: "",
      description: "",
      dateStarted: "",
      dateCompleted: "",
    });
  };
  return (
    <div className="trip-form ">
      <h3>Add New Trip</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Trip Name:</label>
          <input
            name="name"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div className="form-group">
          <label>Trip Description:</label>
          <input
            name="description"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={state.description}
          />
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
              <label>Date of Start:</label>
              <input
                type="date"
                name="dateStarted"
                className="form-control"
                onChange={handleChange}
                value={state.dateStarted}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
              <label>Date of Completion:</label>
              <input
                type="date"
                name="dateCompleted"
                className="form-control"
                onChange={handleChange}
                value={state.dateCompleted}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            className="form-control"
            value="Add Trip"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
