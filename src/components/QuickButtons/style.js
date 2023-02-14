import styled from "styled-components";

export const Button = styled.button`
  /* font-size: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 36px;
  width: 44px;
  height: 44px;
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 32px;
  background-color: #6300eb;
  border-radius: 70%;
  font-size: 60px;
  color: white;
  cursor: pointer;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

export const Container = styled.div`
  .topBtn {
    opacity: 0;
    z-index: -10;
    /* bottom: 92px; */
    bottom: 36px;
  }
  .topBtn.active {
    z-index: 10;
    opacity: 1;
  }

  .cmtBtn {
    bottom: 36px;
  }
`;
