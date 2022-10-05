import styled from 'styled-components'
import theme from '../../styles/theme';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > div {
    min-width: 90vw;
    max-width: 90vw;
  }
  .md-editor.w-md-editor-show-live {
    .w-md-editor-preview {
        display: block;
      }
  }
  @media ${theme.mobile} {
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
  background: ${(props) => props.color || "#fff"};
  float: ${(props) => props.float || null};
`;