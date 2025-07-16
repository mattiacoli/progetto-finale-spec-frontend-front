import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext()

const API_URL = 'http://localhost:3001/cars'

function GlobalProvider({ children }) {

  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCars(data)
      })
      .catch(err => console.error(err))
  }, [])


  return (
    <GlobalContext.Provider value={{ cars }}>
      {children}
    </GlobalContext.Provider>

  )
}

function useGlobalContext() {
  const context = useContext(GlobalContext)
  return context
}

export { GlobalProvider, useGlobalContext, API_URL }