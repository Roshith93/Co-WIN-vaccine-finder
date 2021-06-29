import { makeStyles, createMuiTheme } from '@material-ui/core/styles'

export const typographyTheme = createMuiTheme()
export const buttonTheme = createMuiTheme()

export const useStyles = makeStyles((theme) => ({
  navRoot: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 'bolder',
  },
  headingStyle:{
    fontSize: 16,
    fontWeight: 'bolder',
    color:'red',
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
      fontWeight: 'normal',
    },
  },
  homeContainer: {
    margin: 5,
    padding: 5,
    // display: 'flex',
    // alignItems:'center',
    // justifyContent:'center'
    display: 'grid',
    placeItems: 'center',
  },
  paperRoot: {
    padding: 10,
  },
  searchTabRoot: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  cardRoot: {
    minWidth: 275,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  subButton: {
    fontSize: 16,
    fontWeight: 'bolder',
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
      fontWeight: 'normal',
    },
  },
  slotRoot: {
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  center: {
    fontWeight: 'bolder',
  },
  slot: { color: 'green', textTransform: 'uppercase', fontWeight: 'bold' },
  age: { textTransform: 'uppercase', fontWeight: 'bold' },
  vaccine: { textTransform: 'uppercase', fontWeight: 'bold' },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  chipFilter:{
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 5,
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}))


typographyTheme.typography.h3 = {
  fontSize: '1.7rem',
  '@media (min-width:600px)': {
    fontSize: '1.7rem',
  },
  [typographyTheme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}
