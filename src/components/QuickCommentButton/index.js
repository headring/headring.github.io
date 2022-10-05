import React from "react";
import { Button, Message } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

function QuickCommentButton({ modalOpen, setModalOpen }) {
  return (
    <Button
      onClick={() => {
        setModalOpen(!modalOpen);
      }}
    >
      <Message>
        <FontAwesomeIcon icon={faComment} fontSize={"36px"} />
      </Message>
    </Button>
  );
}

export default QuickCommentButton;
