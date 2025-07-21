export default function ComparatorCard({ carsToCompare }) {
  return (
    <>
      {carsToCompare.map(c => (
        <div className="col" key={c.id}>
          <div className="card shadow-sm h-100">
            <img src={c.image} alt="" className="card-img-top " style={{ height: "100%" }} />
            <div className="card-body">

              <div className="tags d-flex gap-2 mb-3">
                {c.tags.map(tag => (
                  <span class="badge text-bg-primary fs-6">{tag}</span>
                ))}

              </div>

              <h2 className="card-title">{c.title}</h2>
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

          </div>
        </div>
      ))}
    </>
  )
}