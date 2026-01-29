import React from 'react';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';

// age 상수로 나이를 설정한다(임의)
// 19세 이상 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력

const Jsx05 = () => {
  const age = 26;
  const isAdult = age >= 19;
  const isEven = age % 2 === 0;

  const enter = isAdult ? <PassComponent /> : <NotPassComponent />
  const win = isEven ? <LuckyComponent /> : <UnLuckyComponent />
  const result = (
    <div>
      <p>당신의 나이는 {age}이므로,</p>
      {enter}
      {win}
    </div>
  )
  return (
    <>
      {result}
    </>
  );
};

export default Jsx05;


// import React from 'react';
// // age 상수로 나이를 설정한다(임의)
// // 19세 이상 성인이라면 "입장 가능"
// // 성인이 아니라면 "입장 불가"
// // 성인과 관계 없이 age가 짝수라면 "당첨"을 출력
// const Jsx05 = () => {

//   const age = 26;
//   const ageEvenMsg = "당첨"
//   const canIn = "입장 가능"
//   const canNotIn = "입장 불가"
//   let result1 = ""
//   let result2 = ""

//   if(age >= 19) {
//     result1 = canIn;
//   }
//   else {
//     result1 = canNotIn;
//   }
  
//   if(age % 2 === 0) {
//     result2 = ageEvenMsg;
//   }

//   return (
//     <div>
//       {result1}
//       {" " + result2}
//     </div>
//   );
// };

// export default Jsx05;