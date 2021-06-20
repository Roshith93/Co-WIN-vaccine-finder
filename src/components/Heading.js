import Typography from '@material-ui/core/Typography'

export const Heading = ({ variant, title, isCenter }) => (
  <Typography
    variant={variant}
    gutterBottom
    style={isCenter ? { textAlign: 'center' } : null}
  >
    {title}
  </Typography>
)
