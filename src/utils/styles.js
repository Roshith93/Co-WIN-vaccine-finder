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
