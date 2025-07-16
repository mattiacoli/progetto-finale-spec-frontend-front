import { NavLink } from "react-router-dom";
import { useRef } from 'react'

export default function Header() {

  const inputRef = useRef()

  return (
    <header className="d-flex justify-content-between">
      <h3><strong>Car</strong>Bool</h3>

      <input
        type="text"
        placeholder="Cerca..."
        className="p-2 rounded-5"
        ref={inputRef}
      />
    </header>
  )
}