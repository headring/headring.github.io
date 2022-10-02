import React from "react";

import { Wapper, Header, Main, Bottom, Comment } from "../Item/styles";
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export interface Post {
  id: number;
  date: string;
  title: string;
  category: string;
  contents: string;
  imgPath: { childImageSharp: { fluid: { originalImg: string } } };
  slug: string;
}

const Item = ({ data }: { data: Post }) => {
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
          <span className='count'>3</span>
        </Comment>
      </Bottom>
      </Link>
    </Wapper>
  );
};

export default Item;
