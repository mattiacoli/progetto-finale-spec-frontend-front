import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext()

const API_URL = 'http://localhost:3001/cars'

function GlobalProvider({ children }) {
  // state
  const [allCars, setAllCars] = useState([])
  const [cars, setCars] = useState([])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [favorites, setFavorites] = useState([])

  // intial fetch
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setAllCars(data)
        setCars(data)
      })
      .catch(err => console.error(err))
  }, [])

  // Search handler
  const handleSearch = (e) => {
    const newQuery = e.target.value
    setQuery(newQuery)


    if (!newQuery || newQuery.trim() === '') {
      setCars(allCars)
      return
    }

    const searchParams = `search=${newQuery}${category ? `&category=${category}` : ''}`

    fetch(`${API_URL}?${searchParams}`)
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.error('Errore nella ricerca:', err))
  }

  // select category handler
  async function handleClick(e) {
    const selectedCategory = e.target.value
    setCategory(selectedCategory)
    try {
      let response;
      if (!query) {
        response = await fetch(`${API_URL}?category=${selectedCategory}`)
      } else {
        response = await fetch(`${API_URL}?search=${query}&category=${selectedCategory}`)
      }
      const data = await response.json()
      setCars(data)
    } catch (error) {
      throw new Error('Errore nel recupero dei dati')
    }
  }


  // addFavorites
  function addFavorites(car) {
    if (favorites.includes(car)) {
      removeFavorite(car.id)
      return
    }
    setFavorites([...favorites, car])
  }

  function removeFavorite(id) {
    setFavorites(favorites.filter(f => f.id != id))
  }

  return (
    <GlobalContext.Provider
      value={{ allCars, cars, setCars, handleSearch, query, handleClick, favorites, addFavorites, removeFavorite }}>
      {children}
    </GlobalContext.Provider>

  )
}

function useGlobalContext() {
  const context = useContext(GlobalContext)
  return context
}

export { GlobalProvider, useGlobalContext, API_URL }