import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { v4 as uuidv4 } from 'uuid'
import Paper from '@material-ui/core/Paper'

import { Heading } from '../components/Heading'
import { CowinContext } from '../context/CowinContext'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}))

export const VaccineSlots = () => {
  const { sessions } = useContext(CowinContext)
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {sessions &&
          sessions.map((session) => {
            let {
              center_id,
              name,
              address,
              min_age_limit,
              vaccine,
              fee_type,
              fee,
              slots,
              available_capacity,
              available_capacity_dose1,
              available_capacity_dose2,
            } = session
            console.log(typeof min_age_limit)
            if (min_age_limit === 18) {
              min_age_limit = '18-44'
              console.log(min_age_limit)
            }
            if (min_age_limit === 45) {
              min_age_limit = '45+'
              console.log(min_age_limit)
            }
            return (
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <CardContent>
                    <Heading
                      variant='h5'
                      component='h2'
                      title={`Center: ${name}`}
                    />
                    <Heading
                      title={`Address: ${address}`}
                      color=''
                      gutterBottom
                    />
                    <Heading
                      title={`Age: ${min_age_limit}`}
                      color=''
                      gutterBottom
                    />
                    <Heading
                      title={`Vaccine: ${vaccine} ${' '} ${fee_type}`}
                      color=''
                      gutterBottom
                    />
                  </CardContent>
                  <CardActions>
                    {available_capacity.length ? (
                      <Button variant='contained' disabled>
                        No Slots Available
                      </Button>
                    ) : (
                      <Button variant='contained' color='primary'>
                        Book Now
                      </Button>
                    )}
                  </CardActions>
                </Paper>
              </Grid>
            )
          })}
      </Grid>
    </div>
  )
}
