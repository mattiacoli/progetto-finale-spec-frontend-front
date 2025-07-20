import { useState } from "react"
import { API_URL, useGlobalContext } from "../context/GlobalContext"
import CardCars from "../components/CarCard"

export default function Homepage() {

  const { handleSearch, query, cars, handleClick, addFavorites, favorites } = useGlobalContext()

  const [sortOrder, setSortOrder] = useState("asc")
  const [sortField, setSortField] = useState("title")
  const [idsToCompare, setIdsToCompare] = useState([])
  const [carsToCompare, setCarsToCompare] = useState([])


  const handleCompare = (carId) => {
    if (!idsToCompare.includes(carId)) {
      setIdsToCompare(prev => [...prev, carId])
    } else {
      setIdsToCompare(prev => prev.filter(id => id !== carId))
    }
  }
  console.log(idsToCompare);

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

  const getComparison = async (ids) => {
    const carPromises = ids.map(id => {
      return fetch(`${API_URL}/${id}`).then(res => res.json())
    })

    const carResponses = await Promise.allSettled(carPromises)

    const cars = carResponses.map(car => car.value.car)

    console.log('Cars to compare:', carsToCompare)


    setCarsToCompare(cars)

  }




  return (
    <>
      <div className="container my-4">

        <div className="searchbar mb-3 d-flex justify-content-center">

          <input
            type="text"
            placeholder="Cerca..."
            className="form-control p-2 rounded-5"
            value={query}
            onChange={handleSearch}
          />
        </div>


        {/* Category Link */}
        <div className="category mb-3 d-flex justify-content-center gap-2">
          <button className="btn btn-outline-primary" value="compatta" onClick={handleClick}>Compatta</button>
          <button className="btn btn-outline-primary" value="berlina" onClick={handleClick}>Berlina</button>
          <button className="btn btn-outline-primary" value="suv" onClick={handleClick}>Suv</button>
          <button className="btn btn-outline-primary" value="" onClick={handleClick}>Tutte</button>
        </div>

        {/* Sort Action */}
        <div className="sort mb-3 d-flex gap-2 align-item-center">
          <div className="sort_action">
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

          {/* Compare Button */}
          <button
            className="btn btn-primary"
            onClick={() => getComparison(idsToCompare)}
          >Compara</button>

        </div>




        {/* Cards */}
        <div className="row row-cols-3">

          {sortedCars.map((c, i) => (
            <CardCars key={i}
              car={c}
              addFavorites={addFavorites}
              favorites={favorites}
              checked={idsToCompare.includes(c.id)}
              onToggle={handleCompare}
            />
          ))}
        </div>


        {carsToCompare.length > 0 && (
          <div className="comparator">
            <div className="row">
              {carsToCompare.map(c => (
                <div className="col" key={c.id}>
                  <h2>{c.title}</h2>
                  <p>{c.price}</p>
                  <p>{c.description}</p>
                </div>


              ))}
            </div>
          </div>

        )}
        {/* Comparator */}
      </div>


    </>
  )
}