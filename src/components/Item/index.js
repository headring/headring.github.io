import React from "react";

import { Wapper, Header, Main, Bottom, Comment } from "./styles";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Item = ({ data }) => {
  return (
    <Wapper>
      <Link to={`/post${data.slug}`}>
        <Header>
          <img
            src={data.imgPath.childImageSharp.fluid.originalImg}
            alt="블로그 썸네일"
          />
        </Header>
        <Main>
          <h3>{data.title}</h3>
          <p>{data.contents}</p>
        </Main>
        <Bottom>
          <span>{data.category}</span>
          <span>{data.date}</span>
          <Comment>
            <FontAwesomeIcon icon={faCommentDots} />
            <span className="count"></span>
          </Comment>
        </Bottom>
      </Link>
    </Wapper>
  );
};

export default Item;
