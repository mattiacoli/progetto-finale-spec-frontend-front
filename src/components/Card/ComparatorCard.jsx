import { Link } from 'react-router-dom'

import { memo } from 'react'

const ComparatorCard = memo(({ carsToCompare }) => {
  return (
    <>
      {carsToCompare.map(c => (
        <div className="col" key={c.id}>
          <Link to={`/${c.id}`} className="card shadow-sm h-100 p-1 text-decoration-none">
            <img src={c.image} alt="" className="card-img-top img-fluid" style={{ height: "100%" }} />
            <div className="card-body">

              <div className="tags d-flex gap-1 mb-3">
                {c.tags.map((tag, i) => (
                  <span key={i} className="badge text-bg-primary">{tag}</span>
                ))}

              </div>

              <h2 className="card-title fw-bold">{c.title}</h2>
              <p>{c.description}</p>
              <table className="table">

                <tbody>
                  <tr>
                    <td scope="row" className="fw-bold">Marca</td>
                    <td>{c.brand}</td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-bold"><i class="bi bi-calendar"></i> Anno</td>
                    <td>{c.modelYear}</td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-bold"><i class="bi bi-car-front-fill"></i> Categoria</td>
                    <td>{c.category}</td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-bold"><i class="bi bi-joystick"></i> Cambio</td>
                    <td>{c.transmission}</td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-bold"><i class="bi bi-fuel-pump"></i> Carburante</td>
                    <td>{c.fuelType}</td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-bold"><i class="bi bi-rocket-takeoff"></i> Potenza</td>
                    <td>{c.horsepower} CV</td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-bold"><i class="bi bi-piggy-bank"></i> Prezzo</td>
                    <td className="fw-bold">{Number(c.price).toLocaleString()} € </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </Link>
        </div>
      ))}
    </>
  )
})

export default ComparatorCard