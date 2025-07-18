import { createPortal } from "react-dom"

export default function Favorites({ show, favorites }) {



  return show && createPortal(


    <div className="overlay">
      <div className="container">
        <ul>
          {favorites.map(f => (
            <li key={f.id}>{f.title}</li>
          ))}
        </ul>
      </div>
    </div>,
    document.body

  )
}