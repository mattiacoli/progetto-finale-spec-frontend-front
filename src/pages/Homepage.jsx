import { useState } from "react"
import { API_URL, useGlobalContext } from "../context/GlobalContext"
import CardCars from "../components/CarCard"

export default function Homepage() {

  const { cars, handleClick, addFavorites } = useGlobalContext()

  const [sortOrder, setSortOrder] = useState("asc")
  const [sortField, setSortField] = useState("title")




  const handleSort = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))
  }

  const sortedCars = [...cars].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortField].localeCompare(b[sortField])
    } else {
      return b[sortField].localeCompare(a[sortField])
    }
  })


  return (
    <>
      <div className="container my-4">



        <div className="category mb-3 d-flex justify-content-center gap-2">
          <button className="btn btn-outline-primary" value="compatta" onClick={handleClick}>Compatta</button>
          <button className="btn btn-outline-primary" value="berlina" onClick={handleClick}>Berlina</button>
          <button className="btn btn-outline-primary" value="suv" onClick={handleClick}>Suv</button>
          <button className="btn btn-outline-primary" value="" onClick={handleClick}>Tutte</button>
        </div>


        <div className="sort mb-3 d-flex gap-2 align-item-center">
          <button className="btn btn-outline-secondary" onClick={handleSort}>{`Ordina ${sortOrder === 'asc' ? "↓" : "↑"}`}</button>.
          <label htmlFor="title" className="p-2">
            <input
              className="me-1"
              type="radio"
              id="title"
              name="sortField"
              value='title'
              checked={sortField === 'title'}
              onChange={(e) => setSortField(e.target.value)} />
            Nome
          </label>
          <label htmlFor="category" className="p-2 ">
            <input
              className="me-1"
              type="radio"
              id="category"
              name="sortField"
              value='category'
              checked={sortField === 'category'}
              onChange={(e) => setSortField(e.target.value)} />
            Categoria
          </label>
        </div>

        <div className="row row-cols-3">

          {sortedCars.map((c, i) => (
            <CardCars key={i} car={c} addFavorites={addFavorites} />
          ))}
        </div>
      </div>


    </>
  )
}