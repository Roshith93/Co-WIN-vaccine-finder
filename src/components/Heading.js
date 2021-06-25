import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/core/styles'

import { typographyTheme } from '../utils/styles'

export const Heading = ({ variant, title, isCenter, component, color }) => (
  <ThemeProvider theme={typographyTheme}>
    <Typography
      variant={variant}
      gutterBottom
      style={isCenter ? { textAlign: 'center' } : null}
      component={component}
      color={color}
    >
      {title}
    </Typography>
  </ThemeProvider>
)
