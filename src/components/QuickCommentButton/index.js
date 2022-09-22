import React from "react";
import { Button, Message } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import * from '@fortawesome/fontawesome-free-solid';
import { faComment } from "@fortawesome/free-solid-svg-icons";
// import * as Icons from "@fortawesome/free-solid-svg-icons";

function QuickCommentButton() {
  return (
    <Button>
      <Message>
        <FontAwesomeIcon icon={faComment} fontSize={"36px"} />
      </Message>
    </Button>
  );
}

export default QuickCommentButton;
