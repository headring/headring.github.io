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
  padding: 12px;
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

  a.under {
    position: relative;
    display: block;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -2px;
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

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* height: 72px; */
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 12px;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 12px;
  /* margin: 0 auto;
  height: 72px; */
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  width: 20px;
`;

export const Logo = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

export const Dark = styled.div`
  /* display: inline-block; */
  display: flex;
  /* position: relative; */
  justify-content: center;
  cursor: pointer;
  width: 28px;
`;
