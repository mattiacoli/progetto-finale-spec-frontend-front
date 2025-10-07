import { useRef, useState, useEffect } from "react"
import { API_URL, useGlobalContext } from "../context/GlobalContext"

// Components
import CardCars from "../components/Card/CarCard"
import ComparatorCard from "../components/Card/ComparatorCard"
import CategoryLink from "../components/CategoryLink"
import Searchbar from "../components/Searchbar"

export default function Homepage() {

  const { handleSearch, query, cars, handleClick, addFavorites, favorites } = useGlobalContext()

  const [sortOrder, setSortOrder] = useState("asc")
  const [sortField, setSortField] = useState("title")
  const [idsToCompare, setIdsToCompare] = useState([])
  const [carsToCompare, setCarsToCompare] = useState([])

  const comparatorRef = useRef()



  const handleCompare = (carId) => {
    if (!idsToCompare.includes(carId)) {
      setIdsToCompare(prev => [...prev, carId])
    } else {
      setIdsToCompare(prev => prev.filter(id => id !== carId))
    }
  }

  // Sort handler and order
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


  useEffect(() => {
    if (carsToCompare.length > 0) {
      setTimeout(() => {
        if (comparatorRef.current) {
          comparatorRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  }, [carsToCompare]);

  const getComparison = async (ids) => {
    if (ids.length === 0) return;

    const carPromises = ids.map(id => {
      return fetch(`${API_URL}/${id}`).then(res => res.json())
    })

    const carResponses = await Promise.allSettled(carPromises)
    const cars = carResponses.map(car => car.value.car)
    setCarsToCompare(cars)

  }




  return (
    <>
      <section className="hero d-flex flex-column-reverse">

        <div className="container">
          {/* Searchbar */}
          <Searchbar query={query} handleSearch={handleSearch} />
        </div>
      </section>


      <div className="container my-4">

        {/* Category Link */}
        <div className="d-flex justify-content-center">
          <CategoryLink handleClick={handleClick} />
        </div>


        {/* Sort Action */}
        <div className="sort mb-3 d-flex gap-2 align-item-center justify-content-between">
          <div className="sort_action">
            <button className="btn btn-light rounded-5" onClick={handleSort}>{`Ordina ${sortOrder === 'asc' ? "↓" : "↑"}`}</button>
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
            className="btn btn-primary rounded-5"
            onClick={() => getComparison(idsToCompare)}
            disabled={idsToCompare.length === 0}
          >Compara
          </button>

        </div>




        {/* Cards */}
        <div className="row row-cols-3">

          {sortedCars.length > 0 ? sortedCars.map((c, i) => (
            <CardCars key={i}
              car={c}
              addFavorites={addFavorites}
              favorites={favorites}
              checked={idsToCompare.includes(c.id)}
              onToggle={handleCompare}
            />
          )) : (
            <p className="text-center fs-3">Nessun risultato trovato</p>
          )}
        </div>


      </div>


      {/* Comparator */}
      <section>

        <div className={carsToCompare.length > 0 ? `comparator mb-4 shadow` : "comparator d-none"} ref={comparatorRef}>
          <h1 className="text-center mb-3">COMPARATORE</h1>
          <hr />
          <div className="row row-cols-3 my-4 gy-3 justify-content-center">
            <ComparatorCard carsToCompare={carsToCompare} />
          </div>
        </div>

      </section>


    </>
  )
}