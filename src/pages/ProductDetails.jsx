import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { API_URL } from '../context/GlobalContext'


export default function ProductDetail() {

  const { id } = useParams()
  const [selectedCar, setSelectedCar] = useState({})


  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then(res => res.json())
      .then(data => {
        data.success &&
          setSelectedCar(data.car)
      })
  }, [id])


  return (

    <div className="container">
      <h2>{selectedCar?.title}</h2>

      <p>{selectedCar?.description}</p>

      <img src={selectedCar.image} alt="" />

    </div>
  )
}
