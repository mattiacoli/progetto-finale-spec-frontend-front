import { Link } from "react-router-dom"
import { memo } from 'react'
import styles from "./CarCard.module.css"


const CardCars = memo(({ car, addFavorites, favorites, checked, onToggle }) => {

  const isInFavorite = favorites.some(favorite => favorite.id === car.id);


  const handleAddToFavorites = (e) => {
    e.preventDefault();
    addFavorites(car);
  }

  return (
    <>
      <div className={`col mb-3 ${styles.cardContainer}`}>
        <div className={`${styles.card}`}>
          <Link to={`/${car.id}`} className={`${styles.cardHeader} text-decoration-none d-flex justify-content-between`}>
            <h4 className={styles.cardTitle}>{car.title}</h4>
          </Link>
          <div className={styles.cardBody}>
            <p className={styles.cardText}>{car.category}</p>
          </div>
          <div className={`${styles.cardFooter} d-flex justify-content-between align-items-center`}>
            <div>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(car.id)}
                className={`form-check-input ${styles.checkbox}`}
              />
              <small className="ms-1">seleziona per comparare</small>
            </div>
            <button
              className={`${styles.favoriteBtn}`}
              onClick={handleAddToFavorites}>
              <i className={`bi ${isInFavorite ? 'bi-bookmark-fill ' + styles.filledIcon : 'bi-bookmark'} ${styles.favoriteIcon}`}></i>
            </button>
          </div>
        </div>
      </div>
    </>

  )
})

export default CardCars