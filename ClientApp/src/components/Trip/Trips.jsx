import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Trips() {
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

  return (
    <div>
      <h1> All Trips </h1>
      <p>Here you can see all Trips</p>

      {content}
    </div>
  );
}
