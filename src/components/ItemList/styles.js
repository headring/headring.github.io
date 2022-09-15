import styled from "styled-components";

export const Wapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 20px 30px;
`;
