import styled from "styled-components";

export const Input = styled.textarea`
  /* font-size: 20px; */
  display: flex;
  flex: auto;
  margin-bottom: 8px;
  /* height: 72px; */
  /* background-color: aliceblue; */
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  min-height: 90px;
  padding: 8px;
  width: 100%;
  resize: vertical;
`;

export const Wrapper = styled.section`
  /* font-size: 20px; */
  display: flex;
  flex-direction: column;
  /* width: 1180px; */
  flex: auto;
  /* align-items: center; */
  /* margin-bottom: 20px; */
  padding: 8px;
`;

export const Button = styled.button`
  /* font-size: 20px; */
  display: flex;
  /* width: 60px; */
  /* height: 46px; */
  justify-content: center;
  align-items: center;
  /* margin-left: 12px; */
  background-color: #2ea44f;
  border-color: #1b1f2326;
  box-shadow: 0 1px 0 #1b1f231a, inset 0 1px 0 #ffffff08;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;

  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 5px 16px;
  position: relative;
  user-select: none;
  /* vertical-align: middle; */
  white-space: nowrap;
  overflow: visible;
  box-sizing: border-box;
  /* flex: auto; */
`;
