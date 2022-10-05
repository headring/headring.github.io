import React from "react";

import { Wapper, Header, Main, Bottom } from "../Item/styles";
import { Link } from 'gatsby';

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
  console.log('data.slug',data.slug)
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
        <button>하트</button>
      </Bottom>
      </Link>
    </Wapper>
  );
};

export default Item;
