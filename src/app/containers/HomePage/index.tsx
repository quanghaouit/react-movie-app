import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CssBaseline, Typography, InputBase, Grid, Button, Paper} from '@material-ui/core'
import { Carousel } from 'app/components/Carousel/Loadable';
import { TabBar } from 'app/components/TabBar/Loadable';
import { MovieCard } from 'app/components/MovieCard/Loadable';
import useStyle from './ui';
import { selectLoading ,selectMovies } from './redux/selectors';
import { homeFormSaga } from './redux/saga';
import { ContactSupportOutlined } from '@material-ui/icons';

export function HomePage() {
  const classes = useStyle();

  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homeFormSaga });

  let dispatch = useDispatch();
  
  const movies = useSelector(selectMovies);
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
          <Grid item xs={3}>
            <MovieCard/>
          </Grid>
            { movies?.length > 0 && movies.map( movie => {
                return <>ddd</>
            })} 
          </Grid>
      </Container>
    </div>
  );
}
