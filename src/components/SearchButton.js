import { useContext, useEffect } from 'react'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

import { useStyles } from '../utils/styles'
import { CowinContext } from '../context/CowinContext'

export const SearchButton = ({ isSubmitting = false, calledBy }) => {
  const classes = useStyles()
  const { setPincodeCall, setDistrictCall } = useContext(CowinContext)
  useEffect(() => {
    if (calledBy === 'pincode') setPincodeCall(calledBy)
    if (calledBy === 'district') setDistrictCall(calledBy)
  }, [calledBy])
  return (
    <CardActions>
      <Button
        type='submit'
        disabled={isSubmitting}
        variant='contained'
        color='primary'
        className={classes.subButton}
        endIcon={<Icon>send</Icon>}
      >
        {isSubmitting ? 'Checking Availability....' : 'Check Availability'}
      </Button>
    </CardActions>
  )
}
