import React from 'react';
import Modal from 'react-modal';
import styles from '../styles/Modal.module.scss'

export default function SideSushiModal({children, isOpen, closeModal, title}) {
  Modal.setAppElement('#__next');

  let subtitle;

  function afterOpenModal() {

  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      overlayClassName={styles.overlay}
      className={styles.side_modal}
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{title}</h2>
      {children}
    </Modal>
  )
}
