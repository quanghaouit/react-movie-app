import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 500,
  },
  container: {
    position: 'relative',
  },
  content: {
    position: 'absolute',
    bottom: '0px',
    color: '#fff',
  },
  ratingContent: {
    position: 'absolute',
    bottom: '0px',
    color: '#fff',
    right: '20px',
  },
  ratingBox: {
    border: '1px solid #ccc',
    borderRadius: '2px',
    padding: '10px',
  },
  title: {
    textTransform: 'uppercase',
  },
  genderBox: {
    marginBottom: '10px',
  },
  spanText: {
    marginLeft: '10px',
    textTransform: 'capitalize',
    fontWeight: 'lighter',
    display: 'inline',
    fontSize: '14px',
  },
  viewInfo: {
    margin: '0px 10px',
    border: '1px solid #ccc',
    color: '#fff',
  },
  wishlist: {
    color: '#fff',
  },
  point: {
    display: 'flex',
    alignItems: 'center',
  },
  reviews: {
    fontSize: '10px',
    marginLeft: '5px',
    display: 'inline',
  },
  ratingInfo: {
    marginBottom: '10px',
  },
  pointNumber: {
    marginLeft: '10px',
    border: '1px solid #ccc',
    padding: '2px',
    fontSize: '10px',
  },
  rating: {
    '& .MuiRating-root': {
      color: 'red !important',
    },
  },
});

export default useStyles;
