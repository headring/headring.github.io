import styled from 'styled-components'
import theme from '../../styles/theme';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > div {
    width: 100%;
  }
  .md-editor.w-md-editor-show-live {
    .w-md-editor-preview {
        display: block;
      }
  }
  @media screen and (${theme.mobile}) {
    .md-editor.w-md-editor-show-live {
      .w-md-editor-input {
        width: 100%;
      }
      .w-md-editor-preview {
        display: none;
      }
    }
  }
`;
export const Button = styled.button`
  font-size: 32px;
  background: var(--bg);
  color: var(--textTitle);
  float: ${(props) => props.float || null};
  &.purple {
    background-color: #6300eb
  }
`;