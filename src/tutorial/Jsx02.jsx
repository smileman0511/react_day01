export default function Jsx02() {

  const name = "홍길동"
  const age = 20
  

  return (
    // 리액트 프래그먼트 : DOM 트리를 하나로 만들어주기 위한 것
    <>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </>
  )
}