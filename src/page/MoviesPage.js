import { useState, useEffect } from 'react';
import * as api from '../services/api';
import { Link, useRouteMatch } from 'react-router-dom';
const MoviesPage = () => {
  const [hits, setHits] = useState([]);
  const [newImput, setNewImput] = useState('');
  const { url } = useRouteMatch();

  const handleNameChange = event => {
    console.log(event.currentTarget.value);
    const inputValue = event.currentTarget.value.trim();

    setNewImput(inputValue.toLowerCase());
  };

  useEffect(() => {
    api.fetchSearch(newImput).then(setHits);
  }, [newImput]);

  console.log(hits);

  const onSubmit = e => {
    e.preventDefault();

    if (!newImput) return;
    setNewImput(newImput);
    setHits(hits);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleNameChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      {hits && (
        <ul>
          {hits?.results?.map(hit => (
            <li key={hit.id}>
              <Link to={`${url}/${hit.id}`}>
                {hit.title} {hit.original_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;
