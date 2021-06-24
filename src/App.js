import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { VaccineFinder } from './container/VaccineFinder'

function App() {
  return (
    <>
      <NavBar title='Co-WIN Vaccine Finder' />
      <Router>
        <Switch>
          <Route exact path='/' component={VaccineFinder} />
          <Route exact path='/vaccineslots:name' component={VaccineSlots} />
        </Switch>
        <Link to={`/vaccineslots:${123}`}>GO vaccine</Link>
      </Router>
    </>
  )
}

export default App

const VaccineSlots = ({
  match: {
    params: { name },
  },
}) => <p>VaccineSlots : {name}</p>
