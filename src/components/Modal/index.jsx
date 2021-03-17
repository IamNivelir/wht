import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";

import StateContext from "../../lib/StateContext";
import { ModalBody } from "./styles";

const GlobalModal = () => {
  const { state, dispatch } = useContext(StateContext);
  const { openModal, flights } = state;

  const handleClose = () => {
    dispatch({ type: "close" });
  };

  const getBody = () => {
    if (!showModal) null;
    return (
      <ModalBody elevation={3}>
        <h2 id="simple-modal-title">Flight details</h2>
        <p id="simple-modal-description">ID: {openModal}</p>
      </ModalBody>
    );
  };
  const body = getBody();

  const showModal = typeof openModal !== "undefined";

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default GlobalModal;
