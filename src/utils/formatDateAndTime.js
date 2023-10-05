export const formatDate = (date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const parts = date.split("/");
  const month = parseInt(parts[0]);
  const day = parseInt(parts[1]);
  const year = parseInt(parts[2]);
  const newDate = new Date(year, month - 1, day);

  const dayOfWeek = newDate.getDate();
  const monthName = monthNames[newDate.getMonth()];
  const formattedDate = `${dayOfWeek} ${monthName} ${year}`;

  return formattedDate;
};

export const formatTime = (time) => {
  const parts = time.split(":");
  let hours = parseInt(parts[0]);
  const minutes = parseInt(parts[1]);
  let period = "AM";
  if (hours >= 12) {
    period = "PM";
  }
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  const formattedTime = `${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;

  return formattedTime;
};
