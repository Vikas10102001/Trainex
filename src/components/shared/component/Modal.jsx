import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onConfirm, onCancel, title, footer, data }) => {
  return ReactDOM.createPortal(
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onCancel}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onCancel}
          ></button>
        </header>
        <section className="modal-card-body">{data}</section>
        <footer className="modal-card-foot">{footer}</footer>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
