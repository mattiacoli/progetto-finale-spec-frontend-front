import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { API_URL, useGlobalContext } from '../context/GlobalContext'


export default function ProductDetail() {

  const { id } = useParams()
  const [selectedCar, setSelectedCar] = useState({})
  const { addFavorites, favorites } = useGlobalContext()

  const { title, image, description, tags, fuelType, category, modelYear, price, horsepower, transmission } = selectedCar


  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then(res => res.json())
      .then(data => {
        data.success &&
          setSelectedCar(data.car)
      })
  }, [id])


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
          <p className='fw-bold fs-2'>{price} €</p>
          <p className='fs-6'>{description}</p>
          <p><strong>Categoria : </strong> {category}</p>
          <p><strong>Motore : </strong> {fuelType}</p>
          <p><strong>Potenza : </strong> {horsepower} CV</p>
          <p><strong>Cambio : </strong> {transmission}</p>
          <button className='btn btn-primary mt-5' onClick={() => addFavorites(selectedCar)}>Aggiungi ai preferiti</button>
        </div>

      </div>
    </div>

  )
}
