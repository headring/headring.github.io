import React from "react";
import ContentsBox from "../../components/ContentsBox";
import QuickCommentButton from "../../components/QuickCommentButton";
import GlobalStyle from "../../styles/GlobalStyle";
import Utterances from "../../components/Utterances";
import CommentModal from "../../components/CommentModal";
import { useState } from "react";
import { ModalBackdrop } from "./styles";
import { graphql } from "gatsby";

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

// export const queryMarkdownDataBySlug = graphql`
//   query queryMarkdownDataBySlug($slug: String) {
//     allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
//       edges {
//         node {
//           html
//           frontmatter {
//             title
//             date(formatString: "YYYY.MM.DD.")
//           }
//         }
//       }
//     }
//   }
// `;
