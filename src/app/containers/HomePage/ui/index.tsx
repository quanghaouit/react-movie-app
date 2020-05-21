import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom:'20px',
      paddingBottom:'30px',
      boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.2)',
    },
  })
);

export default useStyles;
