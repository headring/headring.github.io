import React from "react";
import ContentsBox from "../../components/ContentsBox";
import QuickCommentButton from "../../components/QuickCommentButton";
import GlobalStyle from "../../styles/GlobalStyle";
import Utterances from "../../components/Utterances";
import CommentModal from "../../components/CommentModal";
import { useState } from "react";
import { ModalBackdrop } from "./styles";

function ContentsPage({ globalTheme }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <GlobalStyle />
      <ContentsBox globalTheme={globalTheme} />
      <Utterances />
      {modalOpen ? (
        <ModalBackdrop onClick={() => setModalOpen(!modalOpen)}>
          <CommentModal />
        </ModalBackdrop>
      ) : (
        <QuickCommentButton modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </div>
  );
}

export default ContentsPage;
