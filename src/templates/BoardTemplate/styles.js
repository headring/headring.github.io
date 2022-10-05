import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.section`
  display: flex;
  font-size: 1rem;
  h1 {
    width: 200px;
    font-size: 1.1rem;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--textNormal);
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
  @media ${theme.mobile} {
    flex-direction: column;
    margin: 0 -1.45rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Table = styled.ul`
  margin-top: 28px;
  flex-grow: 1;
  @media ${theme.mobile} {
    margin-top: 0;
  }
`;

export const Thead = styled.ul`
  display: flex;
  height: 45px;
  align-items: center;
  font-weight: 700;
  border-top: 1px solid var(--textNormal);
  border-bottom: 1px solid #e9e9e9;
  li {
    text-align: center;
  }
  @media ${theme.mobile} {
    display: none;
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
  :hover {
    background: var(--hoverColor);
  }

  @media ${theme.mobile} {
    display: inline-block;
    padding: 1rem 1.45rem;
    li {
      display: block;
      width: calc(100% - 70px);
      text-align: left;
      padding-left: 1.45rem;
      font-size: 1.2rem;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      float: right;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      &:nth-child(1) {
        display: none;
      }
      &:nth-child(2) {
        float: left;
        padding-left: 0;
        width: 70px;
      }
      &:nth-child(4) {
        margin-top: 5px;
        margin-left: 0;
        font-weight: 400;
        color: #6300eb;
        font-size: 0.9rem;
      }
      &:nth-child(5) {
        font-size: 0.9rem;
        font-weight: 400;
        color: #666;
      }
    }
  }
`;

export const Select = styled.select`
  width: 70px;
  margin-top: 10px;
  margin-left: auto;
  padding: 3px 7px;
  border: 1px solid var(--textNormal);
  font-size: 0.9rem;
  @media ${theme.mobile} {
    margin-right: 1.45rem;
  }
`;
