import React, { useState } from 'react';
import './App.css';
import Button from './Button.js';
import Modal from './Modal.js';
import Info from './Info.js';




function App() {
  const [currentColor, setCurrentColor] = useState('black');
  const [modalVisible, setModalVisible] = useState(false);

  const changeColor = (newColor) => {
    setCurrentColor(newColor);
    showModal(newColor);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const showModal = (color) => {
    setModalVisible(true);
    // setTimeout(() => {
    //   setModalVisible(false);
    // }, 10000);
  };

  return (
    <div className="App">
      <div id="container">
        <Info text="Prueba Básica" color={currentColor} />
        <div className="color-buttons">
          <Button color="red" onClick={changeColor} />
          <Button color="blue" onClick={changeColor} />
        </div>
      </div>
      {modalVisible && (
        <Modal currentColor={currentColor} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
