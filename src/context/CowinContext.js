import { createContext, useState, useEffect } from 'react'

import { API } from '../services/axios'

export const CowinContext = createContext()

const GET_STATES = 'http://localhost:3002/states' || '/v2/admin/location/states'
const GET_DISTRICTS = '/v2/admin/location/districts'
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
  return response.data
}

const getDistricts = async (stateId) => {
  const response = await API.get(`${GET_DISTRICTS}/${stateId}`)
  console.log(response)
  return response.data.districts
}
export const CowinProvider = ({ children }) => {
  const [states, setStates] = useState([])
  const [districts, setDistricts] = useState([])
  const [stateId, setStateId] = useState([])
  const [dosageType, setDosageType] = useState('Dose1')
  const [ageGroup, setAgeGroup] = useState({ age18: false, age45: false })
  useEffect(
    () =>
      getStates()
        .then((response) => setStates(response))
        .catch((error) => console.error(error)),
    []
  )
  useEffect(
    () =>
      getDistricts(stateId)
        .then((response) => setDistricts(response))
        .catch((error) => console.error(error)),
    [stateId]
  )
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
        stateId,
        setStateId,
      }}
    >
      {children}
    </CowinContext.Provider>
  )
}
