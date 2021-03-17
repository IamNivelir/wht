import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const ModalBody = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  padding: 20px;
  transform: translate(-50%, -50%);
`;
