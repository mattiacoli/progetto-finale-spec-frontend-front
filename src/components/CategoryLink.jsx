
export default function CategoryLink({ handleClick }) {


  const category = ["compatta", "berlina", "suv"]

  return (
    <div className="category mb-3 d-flex justify-content-center gap-4">
      {category.map((c, i) => (
        <button key={i} className="btn" value={c} onClick={handleClick}>{c.toUpperCase()}</button>
      ))}
      <button className="btn" value="" onClick={handleClick}>TUTTE</button>
    </div>

  )
}