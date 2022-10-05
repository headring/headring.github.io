import React from "react";
import Utterances from "../Utterances";
import { Container } from "./styles";
import CommentInput from "../CommentInput";

function CommentModal() {
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Utterances />
    </Container>
  );
}

export default CommentModal;
