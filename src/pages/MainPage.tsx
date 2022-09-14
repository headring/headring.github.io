import React from "react";

import Item from "../components/Item";
import { BlogList } from "../components/Item/styles";

const datas = [{
  id:1,
  img:'',
  title: 's3.[자료구조/알고리즘] 재귀',
  contents: '재귀 원래의 자리로 되돌아가거나 되돌아옴. 재귀 함수: 자기 자신을 호출하는 함수. 더보기 학습 목표 재귀의 의미에 대해서 이해한다. JavaScript에서 재귀 호출을 할 수 있다. 재귀를 언제 사용해야 하는지 이해한다. 재귀로 문제를 해결하는 방법을 이해한다.',
  category: 'Learning TIL/Bootcamp',
  date : '2022. 8. 23. 14:26',
  likes : 3
},
{
  id:2,
  img:'',
  title: 'Github로 간단하게 배포 작업하기',
  contents: 'Github Page 기능을 활용하기 위해서, 포크한 자신의 리포지토리로 이동합니다. 포크한 리포지토리는 codestates/fe-sprint-my-agora-states 가 아니고, {깃허브 아이디}/fe-sprint-my-agora-states와 같이 자신의 깃허브 아이디가 작성되어 있습니다. Setting 메뉴로 ...',
  category: 'Setting/git',
  date : '2022. 8. 23. 14:26',
  likes : 6
}]

export interface Blog  {
  id: number;
  img: string;
  title: string;
  contents: string;
  category: string;
  date: string;
  likes: number;
}

const MainPage = () => {
  return (
    <main>
      <BlogList>
       {datas.map((data:Blog)=> (
        <Item key={data.id} data={data}/>
       ))}
      </BlogList>
    </main>
  )
}

export default MainPage