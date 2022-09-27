import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  height: 72px;
`;

export const Sns = styled.ul`
  display: flex;
  li {
    margin: 0 6px;
    :last-child {
      margin-right: 0;
    }
  }
`;

export const Copyright = styled.p`
  font-size: 0.9rem;
`;
