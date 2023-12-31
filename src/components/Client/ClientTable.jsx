import React from "react";
import { useSelector } from "react-redux";
import Card from "../shared/ui/Card";

function ClientProfile() {
  const clients = useSelector((state) => state.client.data);

  return (
    <Card className={"table-card"}>
      <ul className="table client">
        <li className="table-header">
          <div>ID</div>
          <div>First Name</div>
          <div>Last Name</div>
          <div>Date of Birth</div>
          <div>Gender</div>
          <div>Address</div>
          <div>Contact</div>
        </li>
        {clients.map((client) => (
          <li className="table-row" key={client.id}>
            <div>{client.id}</div>
            <div>{client.firstName}</div>
            <div>{client.lastName}</div>
            <div>{client.DOB}</div>
            <div>{client.gender}</div>
            <div>{client.address}</div>
            <div>{client.contact}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default ClientProfile;
