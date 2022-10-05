import styled from "styled-components";
import { containerWidth } from "../../styles/CommonStyle";

export const Wapper = styled.div`
  margin: 0 auto;
  min-height: calc(100vh - 140px);
  padding: 0px 1.0875rem 1.45rem;
  ${containerWidth}
  @media ${(props) => props.theme.mobile} {
    padding: 0 1.45rem;
    /* max-width: 100%; */
  }
`;
