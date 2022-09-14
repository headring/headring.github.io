import React from 'react'

import { Blog } from '../../pages/MainPage';


const Item = ({data}:{data:Blog} ) => {
  return (
    <li>
      <div>
        <img src={data.img} alt="블로그 썸네일" />
      </div>
      <div>
        <h3>{data.title}</h3>
        <p>{data.contents}</p>
      </div>
      <div>
        <span>{data.category}</span>
        <span>{data.date}</span>
        <button>하트 {data.likes}</button>
      </div>
    </li>
  )
}

export default Item