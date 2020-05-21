import React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #eee',
  },
  indicator: {
    backgroundColor: '#f50057',
  },
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: ['Helvetica', 'Arial', 'sans-serif'].join(','),
      '&:hover': {
        color: '#f50057',
        opacity: 1,
      },
      '&$selected': {
        color: '#f50057',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#f50057',
      },
    },
    selected: {},
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  tab: {
    backgroundColor: theme.palette.background.paper,
  },
}));

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
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
