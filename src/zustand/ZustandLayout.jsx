import React from 'react';
import useAuthStore from './store/useAuthStore';
import { Outlet } from 'react-router-dom';

const ZustandLayout = () => {

  const {
    isLogin, currentMember, previousUrl,
    setIsLogin, setCurrentMember, setPreviosUrl
  } = useAuthStore();

  return (
    <div>
      <h1>현재 경로: {previousUrl || "없음"}</h1>      
      <h1>현재 유저: {currentMember.memberName || "없음"}</h1>
      <h1>로그인 상태: {isLogin ? "로그인" : "비로그인"}</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ZustandLayout;