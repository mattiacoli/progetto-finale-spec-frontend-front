import { createPortal } from "react-dom"
import styles from "./Favorites.module.css"

export default function Favorites({ show, favorites }) {

  return show && createPortal(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <ul className={styles.favoritesList}>
          {favorites.length > 0 ? (
            favorites.map(f => (
              <li key={f.id} className={styles.favoriteItem}>{f.title}</li>
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