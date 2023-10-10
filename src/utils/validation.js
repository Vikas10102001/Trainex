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
        if (min < current.getMinutes()) error = "Invalid time";
      }
    }
  }
  return error;
};

export const validateAppointmentData = ({ date, time, id }) => {
  const appointmentData = store.getState().appointment.data;
  let error = null;
  let overlappingAppointment;
  if (id)
    overlappingAppointment = appointmentData.find((appointment) => {
      return (
        appointment.date === date &&
        appointment.time === time &&
        appointment.id !== id
      );
    });
  else
    overlappingAppointment = appointmentData.find((appointment) => {
      return appointment.date === date && appointment.time === time;
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

export const validateClientOnSave = (clientData) => {
  const clients = store.getState().client.data;
  let error = null;
  clients.forEach((el) => {
    if (
      el.firstName === clientData.firstName &&
      el.lastName === clientData.lastName &&
      el.contact === clientData.contact
    )
      error = "Client with same name and contact already exists";
  });

  return error;
};
