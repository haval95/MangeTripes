import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
export default function Trips() {
  const [state, setState] = useState({ trips: [], loading: true });
  const history = useHistory();
  const populateTripsData = () => {
    axios.get("api/Trips/getAll").then((result) => {
      const response = result.data;
      setState({ trips: response, loading: false });
    });
  };
  useEffect(() => {
    populateTripsData();
  }, []);

  const handleEdit = (id) => {
    history.push(`/update/${id}`);
  };

  const showAllTrips = (trips) => {
    return (
      <table className="table table-striped">
        <tr>
          <th>Name</th>
          <th>Description </th>
          <th>Date Started</th>
          <th>Date completed</th>
          <th>Actions</th>
        </tr>
        <tbody>
          {trips.map((trip) => {
            return (
              <tr key={trip.id}>
                <td>{trip.name}</td>
                <td>{trip.description}</td>
                <td>{new Date(trip.dateStarted).toISOString().slice(0, 10)}</td>
                <td>
                  {trip.dateCompleted
                    ? new Date(trip.dateCompleted).toISOString().slice(0, 10)
                    : "-"}
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleEdit(trip.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  let content = state.loading ? <p>Loading... </p> : showAllTrips(state.trips);

  return (
    <div>
      <h1> All Trips </h1>
      <p>Here you can see all Trips</p>

      {content}
    </div>
  );
}
