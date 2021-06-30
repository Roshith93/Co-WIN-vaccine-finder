import { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { v4 as uuidv4 } from 'uuid'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'

import { CowinContext } from '../context/CowinContext'
import { useStyles } from '../utils/styles'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge)

export const VaccineSlots = () => {
  const { sessions } = useContext(CowinContext)
  const classes = useStyles()
  const sortSessions =
    sessions &&
    sessions.sort((a, b) =>
      parseFloat(a.available_capacity) > parseFloat(b.available_capacity)
        ? -1
        : parseFloat(a.available_capacity) < parseFloat(b.available_capacity)
        ? 1
        : 0
    )
  return (
    <div className={classes.slotRoot}>
      <Grid container spacing={3}>
        {sessions.length
          ? sortSessions.map((session) => {
              let {
                name,
                address,
                min_age_limit,
                vaccine,
                fee,
                fee_type,
                available_capacity,
                // fee,
                // slots,
                // available_capacity_dose1,
                // available_capacity_dose2,
              } = session
              if (min_age_limit === 18) {
                min_age_limit = '18-44'
              }
              if (min_age_limit === 45) {
                min_age_limit = '45+'
              }
              return (
                <Grid item xs={12} sm={6} key={uuidv4()}>
                  <Paper className={classes.paper}>
                    <CardContent>
                      <Typography
                        variant='h5'
                        component='h3'
                        title={`${name}`}
                        color='primary'
                        className={classes.center}
                      >
                        {name}
                      </Typography>
                      <Typography
                        component='p'
                        title={`${name}`}
                        color='primary'
                      >
                        {address}
                      </Typography>
                      <Typography>
                        Age :{' '}
                        <span
                          className={classes.age}
                        >{`${min_age_limit}`}</span>
                      </Typography>
                      <Typography>
                        Vaccine :{' '}
                        <span className={classes.vaccine}>{vaccine} </span>
                        <span
                          className={`${
                            !available_capacity === 0
                              ? classes.slot
                              : classes.vaccine
                          }`}
                        >
                          - {`${fee_type}`}&#x20B9;
                        </span>
                      </Typography>
                      <Typography>
                        Slots :{' '}
                        {!available_capacity === 0 ? (
                          <IconButton aria-label='cart'>
                            <StyledBadge
                              badgeContent={available_capacity}
                              color='secondary'
                            >
                              <EventAvailableIcon />
                            </StyledBadge>
                          </IconButton>
                        ) : (
                          <span className={classes.vaccine}>
                            No slots Available
                          </span>
                        )}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {available_capacity === 0 ? (
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
            })
          : 'No data available'}
      </Grid>
    </div>
  )
}
