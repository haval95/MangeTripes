import React, { useEffect, useState } from "react";
import "../../custom.css";
import { useHistory, useParams } from "react-router";
import axios from "axios";
export default function UpdateTrip() {
  let { id } = useParams();

  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    description: "",
    dateStarted: "",
    dateCompleted: "",
  });
  useEffect(() => {
    axios.get(`api/Trips/SingleTrip/${id}`).then((result) => {
      let data = result.data;
      setState({
        name: data.name,
        description: data.description,
        dateStarted: new Date(data.dateStarted).toISOString().slice(0, 10),
        dateCompleted: data.dateCompleted
          ? new Date(data.dateCompleted).toISOString().slice(0, 10)
          : null,
      });
    });
  }, []);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const cancelEdit = () => {
    history.push("/trips");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let dataObj = {
      ...state,
    };
    axios.put(`api/Trips/UpdateTrip/${id}`, dataObj).then((result) => {
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
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
              <input
                type="button"
                value="Cancel"
                onClick={cancelEdit}
                className="form-control"
                value="Cancel"
                className="btn btn-light"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
              <input
                type="submit"
                value="Update"
                className="form-control"
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
