import React from "react";

import Item, { Post } from "../Item";

import { Wapper } from "./styles";

const ItemList = ({ datas }) => {
  return (
    <Wapper>
      {datas.map((data) => (
        <Item key={data.id} data={data} />
      ))}
    </Wapper>
  );
};

export default ItemList;
