import styled from "styled-components";

export const Title = styled.h1`
  margin: 10% 0 40px 0;
  text-align: center;
  font-weight: 900;
  font-size: 2.5rem;
  transform: rotateX(30deg);
  color: #6300eb;
`;
export const LoginWrap = styled.form`
  box-sizing: border-box;
  width: 380px;
  padding-top: 10rem;
  margin: 0 auto;
`;
export const Panel = styled.ul`
  border: 1px solid #c6c6c6;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 5px 8px 0 rgb(68 68 68 / 4%);
  padding: 20px 28px;
`;

export const PanelItem = styled.li`
  display: table;
  position: relative;
  table-layout: fixed;
  width: 100%;
  padding: 14px 17px 13px;
  box-sizing: border-box;
  border: 1px solid #dadada;
  text-align: left;
  :nth-of-type(1) {
    border-radius: 6px 6px 0 0;
    box-shadow: none;
  }
  :nth-of-type(2) {
    margin-top: -1px;
    border-radius: 0 0 6px 6px;
  }
`;

export const PanelWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputText = styled.input`
  width: 100%;
  font-size: 1rem;
  border: 0 none;
  text-indent: 15px;
  &:focus {
    outline: none;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  margin-top: 38px;
  padding: 13px 0 13px;
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  background-color: #6300eb;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
  color: #fff;
  :hover {
    background-color: #4800aa;
  }
`;
