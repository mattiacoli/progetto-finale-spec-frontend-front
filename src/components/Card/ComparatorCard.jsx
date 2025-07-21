import { Link } from 'react-router-dom'

export default function ComparatorCard({ carsToCompare }) {
  return (
    <>
      {carsToCompare.map(c => (
        <div className="col" key={c.id}>
          <Link to={`/${c.id}`} className="card shadow-sm h-100 p-1 text-decoration-none">
            <img src={c.image} alt="" className="card-img-top img-fluid" style={{ height: "100%" }} />
            <div className="card-body">

              <div className="tags d-flex gap-1 mb-3">
                {c.tags.map(tag => (
                  <span class="badge text-bg-primary">{tag}</span>
                ))}

              </div>

              <h2 className="card-title fw-bold">{c.title}</h2>
              <p>{c.description}</p>
              <table class="table">

                <tbody>
                  <tr>
                    <td scope="row" className="fw-bold">Marca</td>
                    <td>{c.brand}</td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-bold">Anno</td>
                    <td>{c.modelYear}</td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-bold">Categoria</td>
                    <td>{c.category}</td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-bold">Cambio</td>
                    <td>{c.transmission}</td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-bold">Carburante</td>
                    <td>{c.fuelType}</td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-bold">Potenza</td>
                    <td>{c.horsepower} CV</td>
                  </tr>
                  <tr>
                    <td scope="row" className="fw-bold">Prezzo</td>
                    <td className="fw-bold">{c.price} € </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </Link>
        </div>
      ))}
    </>
  )
}