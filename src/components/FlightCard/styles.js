import styled from "styled-components";
import Divider from "@material-ui/core/Divider";

export const Card = styled.div`
  padding: 4px 10px 6px;

  .main-grid-wrapper {
    padding: 20px 10px;
  }
`;

export const VerticalDivider = styled(Divider)`
  margin-right: 20px;
`;

export const Label = styled.div`
  padding: 4px 6px;
  display: inline-block;
  background-color: ${({ status }) =>
    status === "DELAYED" ? "orange" : "green"};
  color: ${({ status }) => (status === "DELAYED" ? "black" : "white")};
  border-radius: 4px;
`;
