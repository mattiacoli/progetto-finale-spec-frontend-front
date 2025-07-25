import { Link } from "react-router-dom";
import { useState } from 'react'
import { useGlobalContext } from "../context/GlobalContext"
import Favorites from "./Favorites/Favorites";


export default function Header() {

  const { favorites, removeFavorite } = useGlobalContext()
  const [isVisible, setIsVisible] = useState(false)

  const toggleFavorites = () => {
    setIsVisible(!isVisible)
  }

  return (
    <header className="d-flex justify-content-between shadow">

      <div className="invisible">
        <h1 className="invisible">CarBool</h1>
      </div>

      <Link to={"/"} className="logo_link text-decoration-none text-white position-absolute start-50 translate-middle-x">
        <h1 className="text-center">CarBool</h1>
      </Link>

      <div className="favorites d-flex gap-3 ms-auto">
        <button className="nav-link fs-2" onClick={toggleFavorites}><i className={`bi text-white ${favorites.length > 0 ? "bi-bookmark-fill" : "bi-bookmark"}`}></i></button>
      </div>

      {favorites.length > 0 && (
        <div className="badge-counter">
          <span>{favorites.length}</span>
        </div>
      )}

      <Favorites show={isVisible} favorites={favorites} remove={removeFavorite} />


    </header>
  )
}