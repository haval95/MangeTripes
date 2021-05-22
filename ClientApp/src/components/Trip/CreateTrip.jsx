import React, { useState } from "react";
import "../../custom.css";
export default function CreateTrip() {
  const [state, setState] = useState({
    name: "",
    destination: "",
    dateStarted: null,
    dateCompleted: null,
  });

  const handleSubmit = () => {};
  return (
    <div>
      <h3>Add New Trip</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Trip Name:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Trip Description:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
              <label>Date of Start:</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="form-group">
              <label>Date of Completion:</label>
              <input type="date" className="form-control" />
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
