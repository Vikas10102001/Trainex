import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../../../store/store";

export default function Alert({ data}) {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();

  //displaying alert only for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      dispatch(setAlert(null));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);
  return visible ? <div className={`alert alert_${data.type}`}>{data.message}</div> : null;
}
