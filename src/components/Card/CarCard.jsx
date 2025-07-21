import { Link } from "react-router-dom"


export default function CardCars({ car, addFavorites, favorites, checked, onToggle }) {

  const isInFavorite = favorites.some(favorite => favorite.id === car.id);


  const handleAddToFavorites = (e) => {
    e.preventDefault();
    addFavorites(car);
  }

  return (
    <>
      <div to={`/${car.id}`} className="col mb-3">
        <div className="card text-start mb-3">
          <Link to={`/${car.id}`} className="card-header text-decoration-none d-flex justify-content-between">
            <h4 className="card-title">{car.title}</h4>
          </Link>
          <div className="card-body">
            <p className="card-text">{car.category}</p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onToggle(car.id)}
              className='form-check-input'
            />
            <button
              className="btn btn-outline-primary"
              onClick={handleAddToFavorites}>
              <i className={`bi ${isInFavorite ? 'bi-bookmark-fill' : 'bi-bookmark'}`}></i>
            </button>
          </div>
        </div>
      </div>
    </>

  )
}