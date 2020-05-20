import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {Facebook, Pinterest, Twitter ,LinkedIn} from '@material-ui/icons';
import { Container, CssBaseline, Typography, Grid, Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '5px',
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    desinged:{
      fontSize:'10px',
      color:"#ccc",
    },
    textRight:{
      textAlign:'right',
    },
    buttonSize:{
      fontSize:'11px'
    },
    icons: {
      textAlign:'right',
      color:'#ccc'
    },
    line:{
      backgroundColor:'#ccc',
      height: '1px',
      color: '#ccc',
      border: 'none'
    }
  }))

export function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs>
            <Typography className={classes.title} noWrap>
              THEMOVIEBOX
          </Typography>
          </Grid>
          <Grid className={classes.textRight} item xs>
              <Button className={classes.buttonSize}>About</Button>
              <Button className={classes.buttonSize}>Movie</Button>
              <Button className={classes.buttonSize} >Rating</Button>
              <Button className={classes.buttonSize}>Contact</Button>
          </Grid>
        </Grid>
        <hr className={classes.line}/>
        <Grid container spacing={2}>
          <Grid item xs>
            <Typography className={classes.desinged} noWrap>
              Designed by Milan Houter. All rights reserved.
          </Typography>
          </Grid>
          <Grid className={classes.icons} item xs>
              <Facebook/>
              <Pinterest/>
              <Twitter/>
              <LinkedIn/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
