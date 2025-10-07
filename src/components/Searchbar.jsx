export default function Searchbar({ query, handleSearch }) {

  return (
    <div className="searchbar mb-3 d-flex justify-content-center">
      <input
        type="text"
        placeholder="Cerca..."
        className="form-control p-2 rounded-5 text-white"
        value={query}
        onChange={handleSearch}
      />
    </div>
  )
}