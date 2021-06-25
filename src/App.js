import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { VaccineFinder } from './container/VaccineFinder'
import { VaccineSlots } from './container/VaccineSlots'

function App() {
  return (
    <>
      <NavBar title='Co-WIN Vaccine Finder' />
      <VaccineFinder/>
      
    </>
  )
}

export default App