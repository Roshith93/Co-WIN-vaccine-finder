import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'grid',
    placeItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'grid',
    placeItems: 'center',
    fontSize:10,
    backgroundColor:'#FAD02C'
  },
}))

export default function WarningText() {
  const classes = useStyles()

  return (
    <Container maxWidth='md' className={classes.homeContainer}>
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction='row'
          justify='center'
          alignItems='center'
          maxWidth='md'
        >
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              This 'Cowin Vaccine Finder' app is only facilitating the search
              experience through CoWIN public APIs. You will be re-directed to
              CoWin to enter your log-in details in order to complete the
              bookings. Availability of vaccination slots is subject to real
              time data provided by state Government and private hospitals via
              CoWIN. All information entered on the CoWin portal is handled as
              per the Government data handling guidelines, and 'Cowin Vaccine
              Finder' is not privy to this information.
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
