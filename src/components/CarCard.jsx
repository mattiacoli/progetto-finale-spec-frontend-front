import { Link } from "react-router-dom"


export default function CardCars({ car }) {
  return (
    <Link to={`/${car.id}`} className="col">
      <div className="card text-start mb-3">
        <div className="card-header">
          <h4 className="card-title">{car.title}</h4>
        </div>
        <div className="card-body">
          <p className="card-text">{car.category}</p>
        </div>
      </div>
    </Link>

  )
}