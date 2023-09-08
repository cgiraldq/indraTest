import React from 'react';

function Modal({ currentColor, closeModal }) {
  return (
    <div id="modal">
      <div id="modal-content">
        <div className="modal-header">
          <h2>Cambio de Color</h2>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
        </div>
        <p>
          Señor usuario, el color de la pantalla ha cambiado a{' '}
          <span style={{ color: currentColor }}>{currentColor == "blue" ? "AZUL" : "ROJO"}</span>.
        </p>
      </div>
    </div>
  );
}

export default Modal;