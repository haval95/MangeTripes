import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
export default function Delete() {
  const { id } = useParams();
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    description: "",
    dateStarted: "",
    dateCompleted: "",
  });

  useEffect(() => {
    axios.get(`api/Trips/SingleTrip/${id}`).then((res) => {
      setState({
        name: res.data.name,
        description: res.data.description,
        dateStarted: new Date(res.data.dateStarted).toISOString().slice(0, 10),
        dateCompleted: res.data.dateCompleted
          ? new Date(res.data.dateCompleted).toISOString().slice(0, 10)
          : null,
      });
    });
  }, []);

  const handleCancel = () => {
    history.push("/trips");
  };

  const handelDelete = () => {
    axios.delete(`api/Trips/DeleteTrip/${id}`).then((res) => {
      history.push("/trips");
    });
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h2>Delete Trip Confirmation</h2>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{state.name}</h4>
          <p className="card-text"> {state.description}</p>
          <button onClick={handleCancel} className="btn btn-default">
            Cancel
          </button>
          <button onClick={handelDelete} className="btn btn-danger">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
