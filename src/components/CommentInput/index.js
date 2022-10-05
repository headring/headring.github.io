import React from "react";
import { Wrapper, Input, Button } from "./style";

function CommentBox() {
  return (
    <Wrapper>
      <Input placeholder={"Leave a comment"} />
      <Button>Comment</Button>
    </Wrapper>
  );
}

export default CommentBox;
