import {
  makeStyles
} from '@material-ui/core/styles';
const useStyles = makeStyles({
  headerContainer: {
    textAlign: 'center',
    backgroundColor:'#A9D9D0',
    width:'100%',
    lineHeight:'3rem'

  },
  headerTitle: {
      color: '#F2E7DC',
      fontFamily: 'Raleway, sans-serif',
      fontSize: '62px',
      fontWeight: '800',
      lineHeight: '72px',
      margin: '0 0 24px',
      textAlign: 'center',
      textTransform: 'uppercase',
  }
});

export default useStyles;