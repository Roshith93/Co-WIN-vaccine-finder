import {  createContext, useState, useEffect } from 'react'

export const CowinContext = createContext()

export const CowinProvider = ({ children }) => {
  return (
    <CowinContext.Provider value={'hello'}>{children}</CowinContext.Provider>
  )
}
