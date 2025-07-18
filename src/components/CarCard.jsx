import { Link } from "react-router-dom"

export default function CardCars({ car, addFavorites }) {

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    addFavorites(car);
  }

  return (
    <Link to={`/${car.id}`} className="col mb-3">
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
            <i className="bi bi-heart"></i>
          </button>
        </div>
      </div>
    </Link>
  )
}