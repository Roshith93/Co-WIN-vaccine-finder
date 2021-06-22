import { createContext, useState, useEffect } from 'react'

export const CowinContext = createContext()
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
export const CowinProvider = ({ children }) => {
  const [dosageType, setDosageType] = useState('Dose1')
  const [ageGroup, setAgeGroup] = useState({ age18: false, age45: false })
  useEffect(() => console.log('Hello'), [])
  return (
    <CowinContext.Provider
      value={{ dosageType, setDosageType, ageGroup, setAgeGroup }}
    >
      {children}
    </CowinContext.Provider>
  )
}
