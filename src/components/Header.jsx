import { Link } from "react-router-dom";
import { useState } from 'react'
import { useGlobalContext, API_URL } from "../context/GlobalContext"

export default function Header() {

  const { allCars, setCars } = useGlobalContext()
  const [query, setQuery] = useState('')


  const handleSearch = (e) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    if (!newQuery || newQuery.trim() === '') {
      setCars(allCars)
      return
    }
    fetch(`${API_URL}?search=${query}`)
      .then(res => res.json())
      .then(data => {
        setCars(data)
      })
      .catch(err => console.error(err))
  }


  return (
    <header className="d-flex justify-content-between">
      <Link to={"/"} className="text-decoration-none text-white">
        <h3><strong>Car</strong>Bool</h3>
      </Link>

      <input
        type="text"
        placeholder="Cerca..."
        className="p-2 rounded-5"
        value={query}
        onChange={handleSearch}
      />

    </header>
  )
}