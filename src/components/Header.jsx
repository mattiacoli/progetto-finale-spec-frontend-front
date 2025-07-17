import { Link } from "react-router-dom";
import { useState } from 'react'
import { useGlobalContext } from "../context/GlobalContext"

export default function Header() {

  const { handleSearch, query } = useGlobalContext()



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