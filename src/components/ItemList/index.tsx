import React from 'react'

import Item, { Post } from '../Item';

import { Wapper } from './styles';

interface ItemListProps {
    datas: Post[];
}

const ItemList = ( { datas }: ItemListProps ) => {
  return (
    <Wapper>
      {datas.map((data:Post)=> (
        <Item key={data.id} data={data} />
       ))}
    </Wapper>
  )
}

export default ItemList