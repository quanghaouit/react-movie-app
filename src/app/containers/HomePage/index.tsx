import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CssBaseline, Typography, InputBase, Grid, Button, Paper } from '@material-ui/core';
import { Carousel } from 'app/components/Carousel/Loadable';
import { TabBar } from 'app/components/TabBar/Loadable';
import { MovieCard } from 'app/components/MovieCard/Loadable';
import { Loading } from 'app/components/Loading/Loadable';
import useStyle from './ui';
import { selectMovies, selectMapGenres, selectLoading, selectLoadingPage } from './redux/selectors';
import { homeFormSaga } from './redux/saga';

export function HomePage() {
  const classes = useStyle();

  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homeFormSaga });

  let dispatch = useDispatch();

  const movies = useSelector(selectMovies);
  const mapGenres = useSelector(selectMapGenres);
  const isLoading = useSelector(selectLoading);
  let page = useSelector(selectLoadingPage);

  const handleScroll = () => {
    if (window.pageYOffset >= 1000 * page) {
      dispatch(actions.pageIncrease( page ++));
   }
  };

  useEffect(()=>{
    dispatch(actions.loadGenres());
    dispatch(actions.loadPopular());
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('mousemove', () => {})
    }
  },[])
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
          {movies.length &&
            movies.map((movie, index) => {
              return (
                <Grid item xs={4} sm={4} md={3} key={index}>
                  <MovieCard movie={movie} mapGenres={mapGenres} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
      {isLoading ? <Loading/> : ''}
    </div>
  );
}
