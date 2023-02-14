import React from "react";
import ContentsBox from "../components/ContentsBox";
import GlobalStyle from "../styles/GlobalStyle";
import Utterances from "../components/Utterances";
import { useState } from "react";

import styled from "styled-components";
import QuickCommentButton from "../components/QuickButtons";
export const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0);
`;

export const CommentContainer = styled.div`
  .utterances {
    width: 100%;
    max-width: 100%;
  }
`;

function ContentsPage({ globalTheme, title, date, categories, html }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <GlobalStyle />
      <ContentsBox
        globalTheme={globalTheme}
        title={title}
        date={date}
        categories={categories}
        html={html}
      />
      <QuickCommentButton />
      <CommentContainer>
        <Utterances />
      </CommentContainer>
    </div>
  );
}

export default ContentsPage;
