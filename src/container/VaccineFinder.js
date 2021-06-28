import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

import Typography from '@material-ui/core/Typography'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles'

import SearchTabs from './SearchTabs'
import { useStyles } from '../utils/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

export const VaccineFinder = (props) => {
  console.log(props)
  const classes = useStyles()
  return (
    <Container maxWidth='md' className={classes.homeContainer}>
      <ThemeProvider theme={theme}>
        {/* <Typography variant='h4' style={{ textAlign: 'center', paddingBottom:'2px' }}>
          {' '}
          Find Vaccines near you
        </Typography> */}
      </ThemeProvider>
      <Paper elevation={3} className={classes.paperRoot}>
        <SearchTabs {...props} />
      </Paper>
    </Container>
  )
}
