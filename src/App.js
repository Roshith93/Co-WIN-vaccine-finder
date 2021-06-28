import { NavBar } from './components/NavBar'
import { VaccineFinder } from './container/VaccineFinder'
import WarningText from './components/WarningText'
import SpeedDial from './components/SpeedDial'

function App() {
  return (
    <>
      <NavBar title='CO-WIN Vaccine Finder' />
      <SpeedDial>
        
      <VaccineFinder />
      <WarningText />
      </SpeedDial>
    </>
  )
}

export default App
