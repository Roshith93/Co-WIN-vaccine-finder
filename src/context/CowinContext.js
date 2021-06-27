import { createContext, useState, useEffect } from 'react'

import { API } from '../services/axios'
import { getDates, getFormattedDate } from '../utils/data'

export const CowinContext = createContext()

const GET_STATES = '/v2/admin/location/states'
const GET_DISTRICTS = '/v2/admin/location/districts'
const FIND_BY_PINCODE = '/v2/appointment/sessions/public/findByPin'
const FIND_BY_DISTRICT_ID = '/v2/appointment/sessions/public/findByDistrict'
// let formattedDate = getFormattedDate(new Date())
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
  return response.data.states
}

const getDistricts = async (stateId) => {
  const response = await API.get(`${GET_DISTRICTS}/${stateId}`)
  return response.data.districts
}

const getVaccinesByPin = async (pincode, searchDate) => {
  const response = await API.get(
    `${FIND_BY_PINCODE}?pincode=${pincode}&date=${searchDate}`
  )
  return response.data.sessions
}

const getVaccinesByDistricts = async (districtId, searchDate) => {
  const response = await API.get(
    `${FIND_BY_DISTRICT_ID}?district_id=${districtId}&date=${searchDate}`
  )
  return response.data.sessions
}
export const CowinProvider = ({ children }) => {
  const [sessions, setSessions] = useState([])
  const [states, setStates] = useState([])
  const [districts, setDistricts] = useState([])
  const [stateId, setStateId] = useState(null)
  const [districtId, setDistrictId] = useState(null)
  const [pincode, setPincode] = useState(null)
  const [dosageType, setDosageType] = useState('Dose1')
  const [ageGroup, setAgeGroup] = useState({ age18: false, age45: false })
  const [currentWeek] = useState(getDates(new Date(), 7))

  const [isVaccineSlotsAvailable, setIsVaccineSlotsAvailable] = useState(false)
  const [districtCall, setDistrictCall] = useState(null)
  const [pincodeCall, setPincodeCall] = useState(null)
  const [tabIndex, setTabIndex] = useState(0)
  const [formattedDate, setFormattedDate] = useState(
    getFormattedDate(new Date())
  )
  console.log('formattedDate', formattedDate)
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

  useEffect(() => {
    if (pincode !== null) {
      getVaccinesByPin(pincode, formattedDate)
        .then((res) => {
          console.log('pin')
          setSessions(res)
          setIsVaccineSlotsAvailable(true)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [districtCall, tabIndex])
  useEffect(() => {
    if (districtId !== null) {
      getVaccinesByDistricts(districtId, formattedDate)
        .then((res) => {
          console.log('dis')
          setSessions(res)
          setIsVaccineSlotsAvailable(true)
        })
        .catch((err) => console.error(err))
    }
  }, [pincodeCall, tabIndex])
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
        getVaccinesByPin,
        districtId,
        setDistrictId,
        getVaccinesByDistricts,
        currentWeek,
        sessions,
        setSessions,
        isVaccineSlotsAvailable,
        setIsVaccineSlotsAvailable,
        pincode,
        setPincode,
        districtCall,
        setDistrictCall,
        pincodeCall,
        setPincodeCall,
        tabIndex,
        setTabIndex,
        formattedDate,
        setFormattedDate,
      }}
    >
      {children}
    </CowinContext.Provider>
  )
}
