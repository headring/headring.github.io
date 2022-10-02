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

  a {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0.5rem;
      width: 0;
      height: 1px;
      background-color: #6300eb;
      transition: all ease-out 0.3s;
    }
    :hover::after {
      width: 100%;
      left: 0;
    }
  }
`;
