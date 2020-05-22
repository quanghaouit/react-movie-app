import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 380,
  },
  title: {
    display: 'inline-block',
  },
  content: {
    position: 'relative',
  },
  year: {
    position: 'absolute',
    top: '-25px',
    color: '#fff',
  },
  point: {
    border: '1px solid #f50057',
    borderRadius: '2px',
    color: '#f50057',
    display: 'inline-block',
    padding: '5px',
    marginTop: '5px',
  },
  right: {
    textAlign: 'right',
  },
});

export default useStyles;
