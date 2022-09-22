import React from 'react'

import { Wapper,Header, Main, Bottom } from '../Item/styles';

export interface Post {
  id : number
  date : string
  title: string
  category: string
  contents: string
  imgPath: {childImageSharp:{fluid:{originalImg:string}}}
}

const Item = ({data}:{data:Post} ) => {
  console.log(data)
  return (
    <Wapper>
      <Header>
        <img src={data.imgPath.childImageSharp.fluid.originalImg} alt="블로그 썸네일" />
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
    </Wapper>
  )
}

export default Item