import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/core/Menu'

import { useStyles } from '../utils/styles'

export const NavBar = ({ title }) => {
  const classes = useStyles()
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
            <Typography variant='h5' className={classes.title}>
              {title}
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
