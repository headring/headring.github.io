import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  font-size: 1rem;
  h1 {
    width: 200px;
    font-size: 1.1rem;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
  }
  li {
    line-height: 22px;
    flex-basis: 100px;
    &:nth-child(1) {
      flex-basis: 60px;
    }
    &:nth-child(4) {
      flex-grow: 1;
    }
  }
`;

export const Table = styled.ul`
  flex-grow: 1;
  width: 100%;
  margin: 28px 0 0 50px;
`;

export const Thead = styled.ul`
  display: flex;
  height: 45px;
  align-items: center;
  font-weight: 700;
  border-top: 1px solid #000;
  border-bottom: 1px solid #e9e9e9;
  li {
    text-align: center;
  }
`;

export const Tbody = styled.ul`
  display: flex;
  align-items: center;
  font-weight: 700;
  border-bottom: 1px solid #e9e9e9;
  li {
    text-align: center;
    font-weight: 400;
    &:nth-child(4) {
      text-align: left;
      margin-left: 50px;
    }
    img {
      width: 70px;
      padding: 5%;
      vertical-align: middle;
    }
  }
`;
