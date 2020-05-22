import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '5px',
      flexGrow: 1,
      width: '100%',
      position: 'fixed',
      top: '0px',
      zIndex: 1000,
    },
    textRight: {
      textAlign: 'right',
    },
    login: {
      marginLeft: '5px',
      marginRight: '5px',
      fontSize: '12px',
      color: '#fff',
    },
    title: {
      padding: '5px 0px',
      flexGrow: 1,
      display: 'none',
      color: '#fff',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.0),
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
      color: '#fff',
      right: '0px',
    },
    inputRoot: {
      color: 'none',
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
export default useStyles;
