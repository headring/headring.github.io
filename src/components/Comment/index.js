import React from "react";
import { Section, Username, Date, Wrapper } from "./style";

function Comment() {
  return (
    <div>
      <Section>
        <Username>{"jueun choi"}</Username>
        <Date>{"2022.8.25.19:21"}</Date>
      </Section>
      <Wrapper>하하</Wrapper>
    </div>
  );
}

export default Comment;
