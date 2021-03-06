import React from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Grid, Box, Typography } from '@material-ui/core';
import { IMovie, genreMap } from 'types/movie';
import useStyles from './ui';

interface Props {
  movie: IMovie;
  mapGenres: genreMap;
}

function truncate(str, n, useWordBoundary) {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1); // the original check
  return (useWordBoundary ? subString.substr(0, subString.lastIndexOf(' ')) : subString) + '...';
}

function showGenres(movie: IMovie, mapGenres: genreMap, detail: boolean){
  const maxShow = detail ? movie.genre_ids.length : 2;
  let arrayGenres : string[] = [];
  movie.genre_ids.map((genreId, index) => {
    if(detail){
      arrayGenres.push(mapGenres[genreId].name);
    } else {
      if (index < maxShow) {
        arrayGenres.push(mapGenres[genreId].name);
      } 
    }
  });
  return detail ? arrayGenres.join(', ') : arrayGenres.join(', ') + '...';
}

const CDN_HOST = 'https://image.tmdb.org/t/p/w500/';
export function MovieCard({ movie, mapGenres }: Props) {
  const classes = useStyles();
  const imgSrc = CDN_HOST + movie.poster_path;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgSrc} title={movie.title} />
        <CardContent className={classes.content}>
          <Typography className={classes.year} component="h5">
            {movie.release_date.split('-')[0]}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <Typography component="h4" className={classes.title} title={movie.title}>
                {truncate(movie.original_title, 20, true)}
              </Typography>
              <Typography gutterBottom variant="subtitle2" color="textSecondary" component="p" title={showGenres(movie,mapGenres,true)}>
                {showGenres(movie, mapGenres, false)}
              </Typography>
            </Grid>
            <Grid item container className={classes.right} direction="column" alignItems="flex-end" justify="center" xs={3}>
              <Box className={classes.point}>{movie.vote_average}</Box>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
