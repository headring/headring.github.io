import React from "react";
import { Button } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import * from '@fortawesome/fontawesome-free-solid';
import { faComment } from "@fortawesome/free-solid-svg-icons";
// import * as Icons from "@fortawesome/free-solid-svg-icons";

function QuickCommentButton() {
  return (
    <Button>
      <FontAwesomeIcon icon={faComment} />
    </Button>
  );
}

export default QuickCommentButton;
