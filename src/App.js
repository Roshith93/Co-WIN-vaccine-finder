import { NavBar } from './components/NavBar'
import { VaccineFinder } from './container/VaccineFinder'

function App() {
  return (
    <>
      <NavBar title='CO-WIN Vaccine Finder' />
      <VaccineFinder />
    </>
  )
}

export default App
