import React from 'react'

import Item from '../Item';
import { Blog } from '../../pages/MainPage';
import { Wapper } from './styles';

interface ItemListProps {
    datas: Blog[];
}

const ItemList = ( { datas }: ItemListProps ) => {
  return (
    <Wapper>
      {datas.map((data:Blog)=> (
        <Item key={data.id} data={data} />
       ))}
    </Wapper>
  )
}

export default ItemList