import styled, { keyframes } from "styled-components";
import { containerWidth } from "../../styles/CommonStyle";

const hue = keyframes`
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  height: 90px;
  ${containerWidth}

  .logo {
    font-size: 2.1rem;
    font-weight: 700;
    color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${hue} 10s infinite linear;
    animation: ${hue} 10s infinite linear;
  }

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
