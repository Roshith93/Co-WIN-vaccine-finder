import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(({
  navRoot: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 'bolder'
  },
  homeContainer: {
   margin: 5,
   padding:5,
   // display: 'flex',
   // alignItems:'center',
   // justifyContent:'center'
   display:'grid',
   placeItems:'center'
 
  },
  paperRoot: {
   padding: 10,
  }
}))

