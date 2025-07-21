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
          <Link to={`/${car.id}`} className="card-header text-decoration-none">
            <h4 className="card-title">{car.title}</h4>
          </Link>
          <div className="card-body">
            <p className="card-text">{car.category}</p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={handleAddToFavorites}>
              <i className={`bi ${isInFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i>
            </button>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onToggle(car.id)}
              className='form-check-input'
            />
          </div>
        </div>
      </div>
    </>

  )
}