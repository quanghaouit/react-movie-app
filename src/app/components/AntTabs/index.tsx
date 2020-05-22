import React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

export const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #eee',
  },
  indicator: {
    backgroundColor: '#f50057',
  },
})(Tabs);

export const AntTab = withStyles((theme: Theme) =>
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
