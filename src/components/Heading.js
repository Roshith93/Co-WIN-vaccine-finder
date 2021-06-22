import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/core/styles'

import { typographyTheme } from '../utils/styles'

export const Heading = ({ variant, title, isCenter }) => (
  <ThemeProvider theme={typographyTheme}>
    <Typography
      variant={variant}
      gutterBottom
      style={isCenter ? { textAlign: 'center' } : null}
    >
      {title}
    </Typography>
  </ThemeProvider>
)
