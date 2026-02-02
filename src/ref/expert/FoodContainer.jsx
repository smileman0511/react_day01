import React, { useRef, useState } from 'react';
import Food from './Food';

const FoodContainer = () => {
  const [foods, setFoods] = useState([])
  const [checked, setChecked] = useState([])
  
  const inputRef = useRef([])

  const addFoodClick = () => {
    const kor = inputRef.current[0].value
    const eng = inputRef.current[1].value

    setFoods([...foods, {kor, eng}]) // {kor, eng} => 객체 초기화 단축. key와 value가 똑같을 때 사용 가능
    setChecked([...checked, false])
  }

  const handleCheckboxOnChange = (_, i) => {
    setChecked(checked.map((check, idx) => (idx === i ? !check : check)))
  }

  const removeFoods = () => {
    const newFood = foods.filter((_, i) => !checked[i])
    setFoods(newFood)
    setChecked(new Array(newFood.length).fill(false))
  }

  // 컴포넌트로 분리하기
  const foodList = foods.map(({kor, eng}, i) => (
    <Food 
      key={i} 
      kor={kor} 
      eng={eng}  
      checked={checked[i] || false}
      onChange={(e) => {handleCheckboxOnChange(e, i)}}
    />
  ))

  return (
    <div>
      <input type="text" 
        placeholder='한국 음식 입력'
        ref={(el) => {inputRef.current[0] = el}}  
      />
      <input type="text" 
        placeholder='영어 음식 입력'
        ref={(el) => {inputRef.current[1] = el}}  
      />
      <button onClick={addFoodClick}>추가</button>
      <button onClick={removeFoods}>삭제</button>
      <ul>
        {foodList}
      </ul>
    </div>
  );
};

export default FoodContainer;