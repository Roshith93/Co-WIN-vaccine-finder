import React, { useContext } from 'react'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import HomeIcon from '@material-ui/icons/Home'
import ClearIcon from '@material-ui/icons/Clear'
import SortIcon from '@material-ui/icons/Sort'

import { CowinContext } from '../context/CowinContext'
import { useStyles } from '../utils/styles'

const actions = [
  { icon: <HomeIcon />, name: 'Home' },
  { icon: <ClearIcon />, name: 'Reset' },
  { icon: <SortIcon />, name: 'Filter' },
]

export default function SpeedDials(props) {
  const { isVaccineSlotsAvailable } = useContext(CowinContext)
  const classes = useStyles()
  const [direction] = React.useState('up')
  const [open, setOpen] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div className={classes.speedDialRoot}>
      {/* <FormControlLabel
        control={<Switch checked={hidden} onChange={handleHiddenChange} color="primary" />}
        label="Hidden"
      />
       */}
      {props.children}
      {isVaccineSlotsAvailable ? (
        <div className={classes.speedDialExampleWrapper}>
          <SpeedDial
            ariaLabel='SpeedDial example'
            className={classes.speedDial}
            hidden={hidden}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction={direction}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={handleClose}
                tooltipOpen
              />
            ))}
          </SpeedDial>
        </div>
      ) : null}
    </div>
  )
}
