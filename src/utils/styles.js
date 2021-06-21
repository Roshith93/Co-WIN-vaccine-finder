import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  navRoot: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 2
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: "bolder"
  },
  homeContainer: {
    margin: 5,
    padding: 5,
    // display: 'flex',
    // alignItems:'center',
    // justifyContent:'center'
    display: "grid",
    placeItems: "center"
  },
  paperRoot: {
    padding: 10
  },
  searchTabRoot: {
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  },
  cardRoot: {
    minWidth: 275
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  subButton: {
    fontSize: 20,
    fontWeight: "bolder"
  }
}));
