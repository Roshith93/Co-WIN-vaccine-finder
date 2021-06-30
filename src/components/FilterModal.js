import { useContext, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio';

import { CowinContext } from '../context/CowinContext'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    minWidth:150
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

export const FilterModal = () => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  })
  const [selectedValue, setSelectedValue] = useState('a');

  const { filterModalOpen, setFilterModalOpen } = useContext(CowinContext)

  const handleClickOpen = () => {
    setFilterModalOpen(true)
  }
  const handleClose = () => {
    setFilterModalOpen(false)
  }
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={filterModalOpen}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          Filter
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom variant="h5">Filter By Age</Typography>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name='checkedA'
                />
              }
              label='18-44'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name='checkedB'
                />
              }
              label='45 above'
            />
          </FormGroup>
          <Typography gutterBottom variant="h5">Filter By Fee Type</Typography>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name='checkedA'
                />
              }
              label='Free'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name='checkedB'
                />
              }
              label='Paid'
            />
          </FormGroup>
          <Typography gutterBottom variant="h5">Filter by Vaccine</Typography>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name='checkedA'
                />
              }
              label='CoviShield'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name='checkedB'
                />
              }
              label='Covaxine'
            />
          </FormGroup>
          <Typography gutterBottom variant="h5">Filter by Dose</Typography>
          <FormControlLabel value="end" control={<Radio color="primary" />} label="Dose 1" />
          <FormControlLabel value="end" control={<Radio color="primary" />} label="Dose 2" />

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
