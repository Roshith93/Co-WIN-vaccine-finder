import {  createContext, useState, useEffect } from 'react'

export const CowinContext = createContext()

export const CowinProvider = ({ children }) => {
  const [dosage, setDosage] = useState('Dosage1')
  return (
    <CowinContext.Provider value={'hello'}>{children}</CowinContext.Provider>
  )
}
