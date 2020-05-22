import React, { useEffect }from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Container, CssBaseline, Typography, InputBase, Grid, Button } from '@material-ui/core'
import useStyles from './ui';
import classnames from "classnames";

export function Header() {
  const classes = useStyles();

  const [visible, setVisible] = React.useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos < 10;
   setVisible(visible);
  };

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('mousemove', () => {})
    }
  },[])

  return (
    <div className={classes.root}>
      <div className={classnames({"hide":!visible})}>
      <CssBaseline />
      <Container>
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
            <Button className={classes.login}>Login</Button>
            <Button className={classes.signup} variant="contained" color="secondary">
              Signup
            </Button>
          </Grid>
        </Grid>
      </Container>
      </div>
    </div>
  );
}
