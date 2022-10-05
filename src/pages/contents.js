import React from "react";
import ContentsBox from "../components/ContentsBox";
import GlobalStyle from "../styles/GlobalStyle";
import Utterances from "../components/Utterances";
import { useState } from "react";

import styled from "styled-components";
export const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
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
      <CommentContainer>
        <Utterances />
      </CommentContainer>
      {/* {modalOpen ? (
        <ModalBackdrop style={{display: 'none'}} onClick={() => setModalOpen(!modalOpen)}>
          <CommentModal />
        </ModalBackdrop>
      ) : (
        <QuickCommentButton style={{display: 'none'}} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )} */}
    </div>
  );
}

export default ContentsPage;
