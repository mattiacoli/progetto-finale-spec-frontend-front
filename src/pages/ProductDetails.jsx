import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { API_URL, useGlobalContext } from '../context/GlobalContext'


export default function ProductDetail() {

  const navigator = useNavigate()
  const { id } = useParams()
  const [selectedCar, setSelectedCar] = useState({})
  const { addFavorites, favorites } = useGlobalContext()

  const { title, image, description, tags, fuelType, category, modelYear, price, horsepower, transmission } = selectedCar


  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then(res => res.json())
      .then(data => {
        data.success ? setSelectedCar(data.car) : navigator("*")
      }).catch(err => {
        console.log(err.message);
      })
  }, [id, navigator])


  return (



    <div className="jumbotron mb-3">
      <div className="row">

        <div className="col-7">
          <img src={image} alt="" />
        </div>

        <div className="col-4">
          <h2 className='fw-bolder'>{title}</h2>
          <p>{modelYear}</p>
          <div className="tags d-flex gap-3 mb-3">
            {tags && tags.map(tag => (
              <span className="badge text-bg-light" key={tag}>{tag}</span>
            ))}
          </div>
          <p className='fw-bold fs-2'>{Number(price).toLocaleString()} €</p>
          <p className='fs-6'>{description}</p>
          <p><strong><i class="bi bi-car-front-fill"></i>  Categoria : </strong> {category}</p>
          <p><strong><i class="bi bi-fuel-pump"></i> Carburante:</strong> {fuelType}</p>
          <p><strong><i class="bi bi-rocket-takeoff"></i> Potenza : </strong> {horsepower} CV</p>
          <p><strong><i class="bi bi-joystick"></i> Cambio : </strong> {transmission}</p>
          <button className='btn btn-primary mt-5' onClick={() => addFavorites(selectedCar)}>
            {favorites.some(car => car.id === selectedCar.id) ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
          </button>
        </div>

      </div>
    </div>

  )
}
