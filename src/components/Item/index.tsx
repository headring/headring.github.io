import React from 'react'

import { Blog } from '../../pages/MainPage';
import { Wapper,Header, Main, Bottom } from '../Item/styles';


const Item = ({data}:{data:Blog} ) => {
  return (
    <Wapper>
      <Header>
        <img src={data.img} alt="블로그 썸네일" />
      </Header>
      <Main>
        <h3>{data.title}</h3>
        <p>{data.contents}</p>
      </Main>
      <Bottom>
        <span>{data.category}</span>
        <span>{data.date}</span>
        <button>하트 {data.likes}</button>
      </Bottom>
    </Wapper>
  )
}

export default Item