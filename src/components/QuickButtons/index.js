import React from "react";
import { Button, Message, Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function QuickButtons({ modalOpen, setModalOpen }) {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  const handleCmt = () => {
    window.scrollTo({
      // top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <Container>
      <Button
        className={BtnStatus ? "topBtn active" : "topBtn"}
        onClick={() => {
          // setModalOpen(!modalOpen);
          handleTop();
        }}
      >
        <Message>
          <FontAwesomeIcon icon={faAngleUp} fontSize={"36px"} />
        </Message>
      </Button>
      {/* <Button
        className={"cmtBtn"}
        onClick={() => {
          handleCmt();
        }}
      >
        <Message>
          <FontAwesomeIcon icon={faComment} fontSize={"24px"} />
        </Message>
      </Button> */}
    </Container>
  );
}

export default QuickButtons;
