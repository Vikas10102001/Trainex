import AppointmentDataItem from "./AppointmentDataItem";
export default function AppointmentData({ item }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {item.appointments.map((appointment, index) => (
          <AppointmentDataItem
            appointment={appointment}
            index={index}
            key={appointment.id}
          />
        ))}
      </tbody>
    </table>
  );
}
