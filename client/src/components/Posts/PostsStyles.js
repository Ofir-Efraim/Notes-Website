import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    width: '90%',
    lineHeight: '2rem',
    borderRadius: '10px',
    boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.5)',
    textAlign: 'center',
    padding:'20px',
    marginRight:'20px',
    backgroundColor:'#fce9db',
    height:'auto',
    '@media screen and (min-width: 2000px)': {
      width: '80%',
      padding:'20px',
      marginRight:'20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    },
  },
  blogEntry:{
    textAlign:'right',
    borderRadius: '10px',
    boxShadow: '3px 3px 20px #BFB78F',
    padding:'20px',
    margin:'20px',
    backgroundColor:'#CCEA8D',

  },
  button:{
    backgroundColor:'#CCEA8D',
    border:'none',
    marginRight:'auto',

    '&:hover':{
      boxShadow: 'rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset',
      transform: 'translateY(-2px)',
      cursor:'pointer',
    }
  },
  header:{
    fontWeight: '800',
        fontSize: '32px',
        color:'white',
        width: 'max-content',
        maxWidth: '100%',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        marginBottom:'10px',
        textAlign:'left',
      
        '@media screen and (max-width: 768px)':{
            fontSize:'32px',
            marginBottom: '12px',
        },
      
        '@media screen and (max-width: 640px)': {
            fontSize: '32px',
            marginBottom: '8px',
            maxWidth: '100%',
        }
  },
  content:{
    textAlign:'left',
    maxWidth: '800px',
        fontSize: '20px',
        fontWeight: '300',
        paddingBottom: '1rem',
        color: '#111',

        '@media screen and (max-width: 768px)': {
            maxWidth: '670px',
            fontSize: '16px',
  },

        '@media screen and (max-width: 640px)': {
            fontSize: '14px',
  }
  }
  });

export default useStyles;