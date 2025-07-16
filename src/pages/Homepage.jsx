import { useGlobalContext } from "../context/GlobalContext"

export default function Homepage() {

  const { cars = [] } = useGlobalContext()

  return (
    <>
      <h1>Homepage</h1>

      <div className="container">
        <ul>
          {cars.map((c, i) => (
            <li key={i}>{c.title}<span>{c.category}</span></li>
          ))}
        </ul>
      </div>


    </>
  )
}