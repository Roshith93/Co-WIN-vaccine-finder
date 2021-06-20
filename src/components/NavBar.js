import {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'

import { useStyles } from '../Utils/styles'
import {CowinContext} from '../Context/CowinContext'

export const NavBar = () => {
  const classes  = useStyles()
  const values = useContext(CowinContext)
  console.log(values)
  return (
    <div className={classes.navRoot}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h4' className={classes.title}>
            Co-WIN Vaccine Finder
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
