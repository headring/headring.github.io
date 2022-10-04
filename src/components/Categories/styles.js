import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.section`
  font-size: 1rem;
  margin-right: 50px;
  h1 {
    width: 200px;
    font-size: 1.1rem;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--textNormal);
  }
  ul {
    margin-top: 10px;
    border: 0 none;
    white-space: normal;
    height: auto;
    li {
      line-height: 25px;
    }
    a.active {
      font-weight: 700;
      color: #6300eb;
    }
  }
  @media ${theme.mobile} {
    margin-right: 0;
    h1 {
      display: none;
    }
    ul {
      border-top: 1px solid var(--textNormal);
      border-bottom: 1px solid var(--textNormal);
      padding: 9px 1.45rem 7px 1.45rem;
      overflow-x: auto;
      overflow-y: hidden;
      height: 45px;
      white-space: nowrap;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        display: inline-block;
        margin-right: 15px;
        :last-child {
          margin-right: 0;
        }
        .count {
          display: none;
        }
      }
    }
  }
`;
