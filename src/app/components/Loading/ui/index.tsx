import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin:'30px 0px',
      flexGrow: 1,
      color: '#ccc'
    },
    icon: {
        color: '#f50057',
    }
  }),
);

export default useStyles;
