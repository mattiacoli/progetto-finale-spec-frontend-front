import { Link } from "react-router-dom";
import { useState } from 'react'
import { useGlobalContext } from "../context/GlobalContext"
import Favorites from "./Favorites/Favorites";


export default function Header() {

  const { handleSearch, query, favorites } = useGlobalContext()
  const [isVisible, setIsVisible] = useState(false)

  const toggleFavorites = () => {
    setIsVisible(!isVisible)
  }

  return (
    <header className="d-flex justify-content-between">
      <Link to={"/"} className="text-decoration-none text-white">
        <h3><strong>Car</strong>Bool</h3>
      </Link>

      <div className="utilities d-flex gap-3">


        <button className="nav-link fs-2" onClick={toggleFavorites}><i className="bi bi-heart"></i></button>

        <input
          type="text"
          placeholder="Cerca..."
          className="p-2 rounded-5"
          value={query}
          onChange={handleSearch}
        />

      </div>

      <Favorites show={isVisible} favorites={favorites} />


    </header>
  )
}