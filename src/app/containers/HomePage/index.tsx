import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { useDispatch, useSelector } from 'react-redux';

export function HomePage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  let dispach = useDispatch();
  // const isLoading = useSelector(selectNumber).
  const addArr = () => {
    dispach(actions.addArrayAndStr({ a: Math.ceil(Math.random() * 10), b: 'ssss' }));
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Movie app" />
      </Helmet>
      <span>HomePage</span>
    </>
  );
}
