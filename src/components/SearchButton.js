import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

import { useStyles } from '../utils/styles'

export const SearchButton = ({ isSubmitting = false }) => {
  const classes = useStyles()
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
