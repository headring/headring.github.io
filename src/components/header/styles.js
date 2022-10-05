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
