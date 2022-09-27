import styled from "styled-components";
import { containerWidth } from "../../styles/CommonStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  height: 72px;
  ${containerWidth}
`;
