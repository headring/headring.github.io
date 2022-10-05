import styled from "styled-components";

export const Wapper = styled.li`
  border: 1px solid var(--textNormal);
  transition: all 0.1s;
  :hover {
    transform: translate(3px, 3px);
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 268px;
  img {
    height: 80%;
  }
  @media ${(props) => props.theme.mobile} {
    display: inline-block;
    height: 100px;
    vertical-align: top;
    img {
      margin: 10px 0 0 12px;
    }
  }
`;

export const Main = styled.div`
  margin: 16px;
  h3 {
    margin-bottom: 16px;
    font-size: 1.2rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
  @media ${(props) => props.theme.mobile} {
    display: inline-block;
    width: calc(100% - 124px);
    vertical-align: middle;
  }
`;

export const Bottom = styled.div`
  position: relative;
  padding: 16px;
  border-top: 1px solid var(--textNormal);
  span {
    display: block;
    font-size: 0.9rem;
    &:nth-child(1) {
      color: #6300eb;
    }
    &:nth-child(2) {
      margin-top: 5px;
      color: #666;
    }
  }
`;

export const Comment = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  span.count {
    margin: 3px 0 0 3px;
  }
`;
