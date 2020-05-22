import { makeStyles, Theme } from '@material-ui/core/styles';

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
  active: {
    color: '#f50057',
  },
  fixWidth: {
    color: '#ccc',
    width: '25px',
  },
}));

export default useStyles;
