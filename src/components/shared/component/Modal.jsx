import { Close } from "@mui/icons-material";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onConfirm, onCancel, title, footer, data }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);
  return ReactDOM.createPortal(
    <div className={`modal ${!isOpen ? "is-inactive" : "is-active"}`}>
      <div className="modal-background" onClick={onCancel}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
        </header>
        <section className="modal-card-body">{data}</section>
        <footer className="modal-card-foot">{footer}</footer>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
