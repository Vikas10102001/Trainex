import AppointmentDataItem from "./AppointmentDataItem";
export default function AppointmentData({ item }) {
  return (
    <ul className="table">
      <li className="table-header">
        <div>No.</div>
        <div>Date</div>
        <div>Time</div>
        <div></div>
      </li>
      {item.appointments.map((appointment, index) => (
        <AppointmentDataItem
          appointment={appointment}
          index={index}
          key={appointment.id}
        />
      ))}
    </ul>
  );
}
