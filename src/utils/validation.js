import store from "../store/store";

export const validateAppointmentTime = (date, time) => {
  let error = null;
  const current = new Date();
  const hr = +time.split(":")[0];
  const min = +time.split(":")[1];
  if (date === current.toLocaleDateString()) {
    if (hr <= current.getHours()) {
      if (hr < current.getHours()) error = "Invalid time";

      if (hr === current.getHours()) {
        console.log(min < current.getMinutes());
        if (min < current.getMinutes()) error = "Invalid time";
      }
    }
  }
  return error;
};

export const validateAppointmentData = ({ date, time, id }) => {
  const appointmentData = store.getState().appointment.data;

  let error = null;
  const overlappingAppointment = appointmentData.find((appointment) => {
    return (
      appointment.date === date &&
      appointment.time === time &&
      id &&
      appointment.id !== id
    );
  });

  if (overlappingAppointment) {
    error = "Another appointment exist with same time";
  }

  return error;
};

export const validateAppointmentTimeOnUpdate = ({ id, time }) => {
  const appointmentData = store.getState().appointment.data;
  const appointment = appointmentData.find((el) => el.id === id);
  return validateAppointmentTime(appointment.date, time);
};

export const validateAppointmentDataOnUpdate = ({ id, updates }) => {
  console.log(id, updates);
  const appointmentData = store.getState().appointment.data;
  const appointment = appointmentData.find((el) => el.id === id);
  const copy = { ...appointment };
  Object.entries(updates).forEach(([key, value]) => {
    copy[key] = value;
  });
  return validateAppointmentData({
    date: copy.date,
    time: copy.time,
    id: appointment.id,
  });
};
