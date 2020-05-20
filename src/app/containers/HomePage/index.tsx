import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CssBaseline, Typography, InputBase, Grid, Button } from '@material-ui/core'
import { Carousel } from 'app/components/Carousel/Loadable';
import { TabBar } from 'app/components/TabBar/Loadable';


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
      <Carousel />
      <CssBaseline />
      <Container>
        <TabBar />
      </Container>
      <hr />
      <span>List Movie</span>
    </>
  );
}
