import React, { useContext, useEffect, useState } from 'react';
import { RouteContext } from '../../context/expert/RouteContext';
import { useNavigate, Navigate } from 'react-router-dom';

// 다른 페이지로 이동!
const NotUser = () => {
  const {state, actions} = useContext(RouteContext)
  const {isLogin} = state

  // 페이지 이동을 시키는 리액트의 훅함수
  const nivagate = useNavigate();

  // 함수의 콜백에서 사용할 경우
  // useEffect(() => {
  //   if(!isLogin){
  //     nivagate("/")
  //   }
  // }, [])

  // 비회원인데 회원페이지에 접근하려고 할 때,
  // 즉 컴포넌트를 노출시키고 싶지 않을 때
  if(!isLogin){
    return <Navigate to={"/"} />
  }

  return (
    <div>
      회원 전용!
    </div>
  );
};

export default NotUser;