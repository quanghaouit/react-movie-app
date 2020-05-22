import React from 'react';
import Typography from '@material-ui/core/Typography';
import { AntTabs, AntTab } from '../AntTabs';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import useStyles from './ui';
import { Grid, Box } from '@material-ui/core';

export function TabBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tab}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Popular" />
          <AntTab label="Top Rated" />
          <AntTab label="Upcomming" />
          <AntTab label="Genner" />
          <Grid className={classes.active} container direction="column" alignItems="flex-end" justify="center">
            <BorderAllIcon />
          </Grid>
          <Grid className={classes.fixWidth} container direction="column" alignItems="flex-end" justify="center">
            <FormatAlignLeftIcon />
          </Grid>
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
