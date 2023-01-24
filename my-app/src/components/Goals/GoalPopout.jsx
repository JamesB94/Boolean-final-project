import React, { useState } from 'react';

export default function MyModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {children}
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}