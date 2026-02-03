import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animals = () => {

  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.

  // 컨텍스트, 상태를 가져오기
  const [value, setValue] = useState([])
  const { state, actions } = useContext(AnimalsContext)

  // 입력값을 버튼으로 상태 변경?
  const handleInputAnimalOnChange = (e) => {
    setValue(e.target.value)
  }
  

  // 엔터 눌렀을 때 작동하는 엔터 함수
  const handleEnterPress = (e) => {
    if(e.key === "Enter") {
      const value = e.target.value
      console.log("value 값: ", value)
    }
  }
  // 엔터 누르면 동물 버튼 생성,
  // e.key === enter
  // e.target.value에 동물 이름 값이 들어감


  return (
    <div>
      <input type="text" 
        placeholder='동물을 입력하세요.'
        onKeyDown={handleInputAnimalOnChange}
      />
      <h2>결과</h2>
      <p></p>
    </div>
  );
};

export default Animals;