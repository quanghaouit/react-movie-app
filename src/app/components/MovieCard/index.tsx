import React from 'react';

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Box, Typography} from '@material-ui/core';
import useStyles from './ui';

export function MovieCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._SL1200_.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
        <Typography className={classes.year} component="h5">2017</Typography>
        <Grid container spacing={2}>
            <Grid xs={8}>
                <Typography component="h4">
                    Logan
                </Typography>
                <Typography gutterBottom variant="subtitle2" color="textSecondary" component="p">
                    Action
                </Typography>
            </Grid>
            <Grid container direction="column" alignItems="flex-end" justify="center" xs={4}>
                <Box className={classes.point}>4.0</Box>
            </Grid>
        </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}