
import React, { useRef } from "react";
import ReactDom from "react-dom";

export const Popup = ({ setIsOpen, project }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setIsOpen(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h2>This is a Modal</h2>
        <button onClick={() => setIsOpen(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};