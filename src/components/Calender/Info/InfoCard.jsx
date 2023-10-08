import React, { useState } from "react";
import Modal from "../../shared/component/Modal";
import { formatDate, formatTime } from "../../../utils/formatDateAndTime";
function compareTimes(a, b) {
  const timeA = a.time.split(":").map(Number);
  const timeB = b.time.split(":").map(Number);

  if (timeA[0] !== timeB[0]) {
    return timeA[0] - timeB[0];
  } else {
    return timeA[1] - timeB[1];
  }
}
export default function InfoCard({ data, currentDate }) {
  const [countModalIsOpen, setCountModalIsOpen] = useState(false);
  const count = data.length;
  const handleCountOnClick = () => {
    setCountModalIsOpen(true);
  };
  const handleModalOnCancel = () => {
    setCountModalIsOpen(false);
  };
  let str = "scheduled";
  data.sort(compareTimes);
  return (
    <div>
      <div onClick={handleCountOnClick} className="info-card-link">
        {count + " " + str}
      </div>
      <Modal
        className={"info-card"}
        onCancel={handleModalOnCancel}
        title={
          <div className="info-card-title">
            <span>Appointments details</span>
            <span className="info-card-date">{formatDate(currentDate)}</span>
          </div>
        }
        isOpen={countModalIsOpen}
        data={data.map((el, ind) => (
          <div className="info-card-data" key={ind}>
            <span>{el.name}</span>
            <span>{formatTime(el.time)}</span>
          </div>
        ))}
      />
    </div>
  );
}
