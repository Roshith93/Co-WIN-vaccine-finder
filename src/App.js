import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { VaccineFinder } from './container/VaccineFinder'
import { VaccineSlots } from './container/VaccineSlots'

function App() {
  return (
    <>
      <NavBar title='Co-WIN Vaccine Finder' />
      <Router>
        <Switch>
          <Route exact path='/' component={VaccineFinder} />
          <Route exact path='/vaccineslots' component={VaccineSlots} />
        </Switch>
        {/* {sessions ? <Redirect to='/vaccineslots' /> : null} */}
      </Router>
    </>
  )
}

export default App