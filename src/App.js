import { NavBar } from './components/NavBar'
import { VaccineFinder } from './container/VaccineFinder'
import WarningText  from './components/WarningText'


function App() {
  return (
    <>
      <NavBar title='CO-WIN Vaccine Finder' />
      <VaccineFinder />
      <WarningText />

    </>
  )
}

export default App
