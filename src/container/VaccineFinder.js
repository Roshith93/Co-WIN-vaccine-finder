import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import { Heading } from "../components/Heading";
import SearchTabs from "./SearchTabs";
import { useStyles } from "../utils/styles";

export const VaccineFinder = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.homeContainer}>
      <Paper elevation={3} className={classes.paperRoot}>
        <Heading variant="h3" title="Find Vaccines near you" isCenter />
        <SearchTabs />
      </Paper>
    </Container>
  );
};
