import React from "react";
import CommentInput from "../CommentInput";
import CommentList from "../CommentList";
import { Box } from "./style";

function CommentBox() {
  return (
    <Box>
      <h3>댓글 {0}개</h3>
      <CommentInput />
      <CommentList />
    </Box>
  );
}

export default CommentBox;
