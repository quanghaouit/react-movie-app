import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

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
    desinged: {
      fontSize: '10px',
      color: '#ccc',
    },
    textRight: {
      textAlign: 'right',
    },
    buttonSize: {
      fontSize: '11px',
    },
    icons: {
      textAlign: 'right',
      color: '#ccc',
    },
    line: {
      backgroundColor: '#ccc',
      height: '1px',
      color: '#ccc',
      border: 'none',
    },
  }),
);

export default useStyles;
