import React from "react";
import { useSelector } from "react-redux";
import Card from "../shared/ui/Card";

function ClientProfile() {
  const clients = useSelector((state) => state.client.data);

  return (
    <Card>
      <ul className="table">
        <li className="table-header">
          <div>ID</div>
          <div>First Name</div>
          <div>Last Name</div>
          <div>Date of Birth</div>
          <div>Gender</div>
          <div>Address</div>
          <div>Contact</div>
          <div>Goal Type</div>
        </li>
        {clients.map((client) => (
          <li className="table-row client" key={client.id}>
            <div>{client.id}</div>
            <div>{client.firstName}</div>
            <div>{client.lastName}</div>
            <div>{client.DOB}</div>
            <div>{client.gender}</div>
            <div>{client.address}</div>
            <div>{client.contact}</div>
            <div>{client.goaltype}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default ClientProfile;
