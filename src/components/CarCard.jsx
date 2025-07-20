import { Link } from "react-router-dom"

export default function CardCars({ car, addFavorites, favorites }) {

  const isInFavorite = favorites.some(favorite => favorite.id === car.id);


  const handleAddToFavorites = (e) => {
    e.preventDefault();
    addFavorites(car);
  }

  console.log(car.image);


  return (
    <Link to={`/${car.id}`} className="col mb-3 text-decoration-none">
      <div className="card text-start mb-3">
        <div className="card-header">
          <h4 className="card-title">{car.title}</h4>
        </div>
        <div className="card-body">
          <p className="card-text">{car.category}</p>
        </div>
        <div className="card-footer text-end">
          <button
            className="btn btn-primary"
            onClick={handleAddToFavorites}>
            <i className={`bi ${isInFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i>
          </button>
        </div>
      </div>
    </Link>
  )
}