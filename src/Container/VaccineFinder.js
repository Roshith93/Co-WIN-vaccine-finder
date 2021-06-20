import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

import { Heading } from '../Components/Heading'
import { useStyles } from '../Utils/styles'

export const VaccineFinder = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='md' className={classes.homeContainer}>
      <Paper elevation={3} className={classes.paperRoot}>
       <Heading variant="h3" title="Find Vaccines near you" isCenter/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut eum
        consequatur, nobis possimus eos. Dicta ut fugit odit accusantium, autem
        vero, modi repudiandae sunt debitis a sint, quae repellat.
      </Paper>
    </Container>
  )
}
