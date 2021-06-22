import { createContext, useState, useEffect } from 'react'

import { API } from '../services/axios'


export const CowinContext = createContext()

const GET_STATES = '/v2/admin/location/states'
console.log(process.env.NODE_ENV)
console.log(process.env.REACT_APP_BASE_URL)
// const recentSearch = {
//   type: 'district',
//   pincode: '110001',
//   state: { id: '3', label: 'Arunachal Pradesh' },
//   district: { id: '20', label: 'Changlang', state_id: '3' },
//   filters: {
//     age: [
//       { id: 'age18', label: '18-44' },
//       { id: 'age45', label: '45+' },
//     ],
//     dose_type: [{ id: 'dose1', label: 'Dose 1' }],
//   },
// }
const getStates = async () => {
  const response = await API.get(GET_STATES)
  console.log(response)
  return response
}
export const CowinProvider = ({ children }) => {
  const [states, setStates] = useState([])
  const [districts, setDistricts] = useState([])
  const [dosageType, setDosageType] = useState('Dose1')
  const [ageGroup, setAgeGroup] = useState({ age18: false, age45: false })
  useEffect(() => getStates(), [])
  return (
    <CowinContext.Provider
      value={{
        dosageType,
        setDosageType,
        ageGroup,
        setAgeGroup,
        states,
        setStates,
        districts,
        setDistricts,
      }}
    >
      {children}
    </CowinContext.Provider>
  )
}
