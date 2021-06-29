import { useContext } from 'react'
import Chip from '@material-ui/core/Chip'
import { useStyles } from '../utils/styles'
import { CowinContext } from '../context/CowinContext'

export default function SmallOutlinedChips() {
  const { sessions } = useContext(CowinContext)
  const classes = useStyles()
  return (
    <div className={classes.chipFilter}>
      {sessions.length ? (
        <>
        <h3>Vaccine Availability</h3>
          <Chip
            variant='outlined'
            size='small'
            label='Bangalore'
            color='primary'
          />
          <Chip variant='outlined' size='small' label='18-44' color='primary' />
          <Chip variant='outlined' size='small' label='45+' color='primary' />
          <Chip
            variant='outlined'
            size='small'
            label='Dose 1'
            color='primary'
          />
          <Chip
            variant='outlined'
            size='small'
            label='COVAXIN'
            color='primary'
          />
        </>
      ) : (
        <h3>Find COVID vaccines near you</h3>
      )}
    </div>
  )
}
