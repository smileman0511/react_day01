import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RouteContext } from '../../context/expert/RouteContext';

const Main = () => {

  const {state} = useContext(RouteContext)

  return (
    <div>
      메인 페이지!😎
      <p>{state.user.userName}님 환영합니다!</p>
    </div>
  );
};

export default Main;