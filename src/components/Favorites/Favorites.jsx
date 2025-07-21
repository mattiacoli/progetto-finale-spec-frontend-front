import { createPortal } from "react-dom"
import { Link } from "react-router-dom"
import styles from "./Favorites.module.css"

export default function Favorites({ show, favorites, remove }) {

  return show && createPortal(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <ul className={styles.favoritesList}>
          {favorites.length > 0 ? (
            favorites.map(f => (
              <li key={f.id} className={styles.favoriteItem}>
                <Link to={`/${f.id}`} className="text-decoration-none text-white">
                  {f.title}
                </Link>
                <button className="btn btn-danger" onClick={() => remove(f.id)}><i className="bi bi-trash"></i></button>
              </li>
            ))
          ) : (
            <p className={styles.emptyMessage}>Nessun preferito salvato</p>
          )}
        </ul>
      </div>
    </div>,
    document.body
  )
}