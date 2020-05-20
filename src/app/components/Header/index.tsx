import React from 'react';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Container, CssBaseline, Typography, InputBase, Grid, Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '5px',
      flexGrow: 1,
    },
    textRight: {
      textAlign: 'right',
    },
    login: {
      marginLeft: '5px',
      marginRight: '5px',
      fontSize: '12px',
    },
    title: {
      padding: '5px 0px',
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'red',
      right: '0px'
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      transition: theme.transitions.create('width'),
      width: '200px',
      fontSize: '14px',
      [theme.breakpoints.up('sm')]: {
        width: '0px',
        '&:focus': {
          width: '10ch',
        },
      },
    },
    signup: {
      fontSize: '12px',
    },
  }),
);


export function Header() {
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
          <Grid item xs className={classes.textRight}>
            <Button className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Button>
            <Button className={classes.login}>
              Login
          </Button>
            <Button className={classes.signup} variant="contained" color="secondary">
              Signup
          </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
