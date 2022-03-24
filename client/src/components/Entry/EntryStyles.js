import {
  makeStyles
} from '@material-ui/core/styles';
const useStyles = makeStyles({
  entryContainer: {
    width: '100%',
    lineHeight: '3rem',
    borderRadius: '10px',
    boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.5)',
    textAlign: 'center',
    padding:'20px',
    backgroundColor:'#F2E7DC',
    height:'40rem',
    '@media screen and (max-width: 640px)': {
      width: '100%',
    },
  },
  inputField: {
    margin:'30px 20px',
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: '#FCFCFD',
    borderRadius: '4px',
    borderWidth: '0',
    boxShadow: 'rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset',
    boxSizing: 'border-box',
    color: '#36395A',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'JetBrains Mono,monospace',
    height: '64px',
    justifyContent: 'center',
    lineHeight: '1',
    listStyle: 'none',
    overflow: 'hidden',
    paddingLeft: '16px',
    paddingRight: '16px',
    position: 'relative',
    textAlign: 'left',
    textDecoration: 'none',
    transition: 'box-shadow .15s,transform .15s',
    userSelect: 'none',
    webkitUserSelect: 'none',
    touchAction: 'manipulation',
    whiteSpace: 'nowrap',
    willChange: 'box-shadow,transform',
    fontSize: '18px',
    '&:focus':{
      boxShadow: '#D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset',
    },
    '&:hover':{
      boxShadow: 'rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset',
      transform: 'translateY(-2px)',
    },
    '@media screen and (min-width: 1300px)': {
      width: '90%',
    },
    '@media screen and (max-width: 550px)': {
      width: '80%',
      fontSize:'12px',
    },
  },
  button: {
    marginTop:'50px',
    textDecoration: 'none',
    fontFamily: "Open Sans, sans-serif",
    fontSize: '24px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#000',
    cursor: 'pointer',
    border: '3px solid',
    padding: '0.25em 0.5em',
    boxShadow: '1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px',
    position: 'relative',
    userSelect: 'none',
    width:'100%',
    height:'4rem',
    webkitUserSelect: 'none',
    touchAction: 'manipulation',
    '@media (min-width: 768px)': {
      padding: '0.25em 0.75em',
    },
    '@media screen and (max-width: 550px)': {
      fontSize:'24px',
    },
    '&:active': {
      boxShadow: '0px 0px 0px 0px',
      top: '5px',
      left: '5px',
    },
  }
});

export default useStyles;