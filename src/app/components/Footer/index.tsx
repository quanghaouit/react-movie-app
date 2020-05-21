import React from 'react';

import { Facebook, Pinterest, Twitter, LinkedIn } from '@material-ui/icons';
import { Container, CssBaseline, Typography, Grid, Button } from '@material-ui/core';
import useStyles from './ui';

export function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs>
            <Typography className={classes.title} noWrap>
              THEMOVIEBOX
            </Typography>
          </Grid>
          <Grid className={classes.textRight} item xs>
            <Button className={classes.buttonSize}>About</Button>
            <Button className={classes.buttonSize}>Movie</Button>
            <Button className={classes.buttonSize}>Rating</Button>
            <Button className={classes.buttonSize}>Contact</Button>
          </Grid>
        </Grid>
        <hr className={classes.line} />
        <Grid container spacing={2}>
          <Grid item xs>
            <Typography className={classes.desinged} noWrap>
              Designed by Milan Houter. All rights reserved.
            </Typography>
          </Grid>
          <Grid className={classes.icons} item xs>
            <Facebook />
            <Pinterest />
            <Twitter />
            <LinkedIn />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
