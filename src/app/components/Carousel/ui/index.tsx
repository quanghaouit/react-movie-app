import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width:'100%',
    overflow:'hidden',
  },
  box: {
    width: '22px',
    height: '8px',
    borderRadius: '2px',
    background: '#eee',
    position: 'absolute',
    bottom: '30px',
  },
})

export default useStyles;