import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CssBaseline, Typography, InputBase, Grid, Button, Paper} from '@material-ui/core'
import { Carousel } from 'app/components/Carousel/Loadable';
import { TabBar } from 'app/components/TabBar/Loadable';
import { MovieCard } from 'app/components/MovieCard/Loadable';
import useStyle from './ui';

export function HomePage() {
  const classes = useStyle();

  useInjectReducer({ key: sliceKey, reducer: reducer });
  let dispach = useDispatch();
  // const isLoading = useSelector(selectNumber).
  const addArr = () => {
    dispach(actions.addArrayAndStr({ a: Math.ceil(Math.random() * 10), b: 'ssss' }));
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Movie app" />
      </Helmet>
      <Carousel />
      <CssBaseline />
      <Container>
        <TabBar />
        <Grid container spacing={3}>
            <Grid item xs={3}>
            <MovieCard/>
            </Grid>
            <Grid item xs={3}>
            <MovieCard/>
            </Grid>
            <Grid item xs={3}>
            <MovieCard/>
            </Grid>
            <Grid  item xs={3}>
            <MovieCard/>
            </Grid>
            <Grid item xs={3}>
            <MovieCard/>
            </Grid>
            <Grid item xs={3}>
            <MovieCard/>
            </Grid>
            <Grid  item xs={3}>
            <MovieCard/>
            </Grid>
          </Grid>
      </Container>
    </div>
  );
}
