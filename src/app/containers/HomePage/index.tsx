import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CssBaseline, Typography, InputBase, Grid, Button, Paper } from '@material-ui/core';
import { Carousel } from 'app/components/Carousel/Loadable';
import { TabBar } from 'app/components/TabBar/Loadable';
import { MovieCard } from 'app/components/MovieCard/Loadable';
import useStyle from './ui';
import { selectMovies, selectGenres, selectMapGenres } from './redux/selectors';
import { homeFormSaga } from './redux/saga';
import { IGenre } from 'types/movie';

export function HomePage() {
  const classes = useStyle();

  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homeFormSaga });

  let dispatch = useDispatch();

  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const map_genres = useSelector(selectMapGenres);
  // const isLoading = useSelector(selectLoading);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };
  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(actions.loadApi());
  });
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
          {movies?.length > 0 &&
            movies.map((movie, index) => {
              return (
                <Grid item xs={4} sm={4} md={3} key={index}>
                  <MovieCard movie={movie} map_genres={map_genres} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
}
