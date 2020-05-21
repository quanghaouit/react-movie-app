import React from 'react';
import { Card, Grid, CardActionArea, CardContent, CardMedia, Button, Container, CssBaseline, Box, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useStyles from './ui';
import { withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
  iconFilled: {
    color: '#f50057',
  },
  iconHover: {
    color: '#f50057',//'#ff3d47',
  },
  iconEmpty:{
    color: '#eee',
  },
})(Rating);

export function BannerCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image="https://c4.wallpaperflare.com/wallpaper/602/875/645/chimera-wrath-of-the-titans-wallpaper-preview.jpg" title="Contemplative Reptile" />
        <CssBaseline />
        <Container className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs>
              <CardContent className={classes.content}>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                  war of the titan
                </Typography>
                <Box className={classes.genderBox}>
                  <Typography className={classes.spanText}>fantasy</Typography>
                  <Typography className={classes.spanText}>Animation</Typography>
                  <Typography className={classes.spanText}>Family</Typography>
                  <Typography className={classes.spanText}>|</Typography>
                  <Typography className={classes.spanText}>Duration: 1h52m</Typography>
                </Box>
                <Box>
                  <Button variant="contained" color="secondary">
                    WATCH MOVIE
                  </Button>
                  <Button className={classes.viewInfo}> VIEW INFO</Button>
                  <Button className={classes.wishlist}> + ADD TO WISH LIST</Button>
                </Box>
              </CardContent>
            </Grid>
            <Grid item xs>
              <CardContent className={classes.ratingContent}>
                <Box className={classes.ratingBox}>
                  <Box className={classes.ratingInfo}>
                    <Typography className={classes.spanText}>Rating</Typography>
                    <Typography className={classes.reviews}>based on 3.546 reviews</Typography>
                  </Box>
                  <Box className={classes.point} color="secondary">
                    <StyledRating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    <Box className={classes.pointNumber}>3.4</Box>
                  </Box>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Container>
      </CardActionArea>
    </Card>
  );
}

export default BannerCard;
