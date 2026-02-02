import React, { useRef, useState } from 'react';

const FoodContainer = () => {
  const inputRef = useRef([])
  const [foods, setFoods] = useState([])

  const foodList = foods.map((food, i) => 
    <li key={i}>
      <label>
        <input type="checkbox" value={food} ref={(el) => (inputRef.current[i + 2] = el)} />
        <span>{food}</span>
      </label>
    </li>
  )

  const handleButtonOnPlusClick = () => {
    const kor = inputRef.current[0].value
    const eng = inputRef.current[1].value

    const form = `${kor} (${eng})`
    setFoods([...foods, form])
  }

  const handleButtonOnDeleteClick = () => {
  
    const deleteFoods = foods.filter((_, i) => {
      const checkbox = inputRef.current[i + 2];
      return !checkbox.checked;
    });

    setFoods(deleteFoods);
  };

  
  return (
    <div>
      <input type="text" placeholder='한글 음식 이름 - ex) 양파' ref={(el) => (inputRef.current[0] = el)}/>
      <input type="text" placeholder='영어 음식 이름 - ex) onion' ref={(el) => (inputRef.current[1] = el)}/>
      <button onClick={handleButtonOnPlusClick}>추가</button>
      <button onClick={handleButtonOnDeleteClick}>삭제</button>
      <ul>
        {foodList}
      </ul>
    </div>
  );
};

export default FoodContainer;

/*
import React, { useRef, useState } from 'react';

// 코드를 완성시켜라! expert!
const FoodContainer = () => {
  
  const [foods, setFoods] = useState([])
  const [checked, setChecked] = useState([])

  const inputRef = useRef([])
  const addFood = () => {
    const kor = inputRef.current[0].value
    const eng = inputRef.current[1].value
    setFoods([...foods, {kor, eng}])
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

  // 컴포넌트로 분리
  const foodList = foods.map(({kor, eng}, i) => (
    <li key={i}>
      <input 
        type="checkbox"
        onChange={(e) => {handleCheckboxOnChange(e, i)}}
      />
      <span>{kor}({eng})</span>
    </li>
  ))

  return (
    <div>
      <input type="text" 
        placeholder='한국 음식 이름'
        ref={(el) => { inputRef.current[0] = el}}
      />
      <input type="text" 
        placeholder='영어 음식 이름'
        ref={(el) => { inputRef.current[1] = el}}
      />
      <button onClick={addFood}>추가</button>
      <button onClick={removeFoods}>삭제</button>
      <ul>
        {foodList}
      </ul>
    </div>
  );
};

export default FoodContainer;
 */