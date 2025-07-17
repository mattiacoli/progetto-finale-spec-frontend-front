import { useState } from "react"
import { API_URL, useGlobalContext } from "../context/GlobalContext"

import CardCars from "../components/CarCard"

export default function Homepage() {

  const { cars, handleClick } = useGlobalContext()




  return (
    <>
      <div className="container my-4">


        <div className="category mb-3 d-flex justify-content-center gap-2">
          <button className="btn btn-outline-primary" value="compatta" onClick={handleClick}>Compatta</button>
          <button className="btn btn-outline-primary" value="berlina" onClick={handleClick}>Berlina</button>
          <button className="btn btn-outline-primary" value="suv" onClick={handleClick}>Suv</button>
          <button className="btn btn-outline-primary" value="" onClick={handleClick}>Tutte</button>
        </div>


        <div className="row row-cols-3">

          {cars.map((c, i) => (
            <CardCars key={i} car={c} />
          ))}
        </div>
      </div>


    </>
  )
}