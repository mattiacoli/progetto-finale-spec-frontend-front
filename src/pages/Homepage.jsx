import { useGlobalContext } from "../context/GlobalContext"

import CardCars from "../components/CarCard"

export default function Homepage() {

  const { cars = [] } = useGlobalContext()

  return (
    <>


      <div className="container my-4">
        <div className="row row-cols-3">

          {cars.map((c, i) => (
            <CardCars key={i} car={c} />
          ))}
        </div>
      </div>


    </>
  )
}