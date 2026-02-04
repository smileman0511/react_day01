import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animals = () => {

  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  const {state, actions} = useContext(AnimalsContext)
  const {insert, remove} = actions;
  const {animals} = state;
  
  // 동물 입력 및 추가 로직
  const animalList = animals.map((animal, i) => (
    <button key={i} onClick={() => remove(animal)}>
      {animal}
    </button>
  ))

  // 동물 버튼을 누르면, 그 버튼을 삭제하는 로직 완성!
  // context에 remove 메서드 구현!

  // 입력 + 엔터면 animalList가 1개씩 늘어남.
  // 버튼을 누르면 제거한다. 새로운 배열로 만들어서 보여주기?
  // 배열 생성 메서드 filter, find, some, map, include, 
  // 안눌린 버튼들만 걸러서 새로운 배열로 만들기
  // 버튼 클릭하면 제거
  console.log(animalList) // -> 배열

  
  return (
    <div>
      <input 
        type="text" placeholder='동물을 입력하세요.'
        onKeyPress={(e) => {
          if(e.key === 'Enter'){
            insert(e.target.value)
          }
        }}
      />
      {animalList}
    </div>
  );
};

export default Animals;