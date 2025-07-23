import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Pagina Non Trovata</h2>
        <p>La pagina che stai cercando non esiste o è stata spostata.</p>
        <Link to="/" className="btn btn-primary">
          Torna alla Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;