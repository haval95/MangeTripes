import React from "react";
import { useHistory } from "react-router";

import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export default function Trips() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const state = useSelector((state) => state.trips);
  const history = useHistory();

  const handleEdit = (id) => {
    history.push(`/update/${id}`);
  };

  const handleDelete = (id) => {
    history.push(`/delete/${id}`);
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
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(trip.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  let content = state.loading ? (
    <p>Loading... </p>
  ) : state.failed ? (
    <p className="text-danger">{state.error} </p>
  ) : (
    showAllTrips(state.data)
  );

  let loggedInUser = isLoading ? (
    <p>Loading </p>
  ) : (
    isAuthenticated && (
      <div>
        <img
          src={user.picture}
          alt={user.name}
          className="img-circle img  circle"
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );

  return (
    <div>
      {loggedInUser}
      <h1> All Trips </h1>
      <p>Here you can see all Trips</p>
      {content}
    </div>
  );
}
