import { useState, useEffect } from 'react';
import * as api from '../services/api';
import { Link, useRouteMatch } from 'react-router-dom';
import qs from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';
const MoviesPage = () => {
  const [cards, setCards] = useState([]);
  const [newImput, setNewImput] = useState('');
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const { query } = qs.parse(location.search);

  const handleNameChange = event => {
    const inputValue = event.currentTarget.value.trim();

    setNewImput(inputValue.toLowerCase());
  };

  useEffect(() => {
    query && api.fetchSearch(query).then(setCards);
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();

    if (!newImput) return;
    history.push({ pathname: '/movies', search: '?query=' + newImput });
    setNewImput(newImput);
    setCards(cards);
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
      {cards && (
        <ul>
          {cards?.results?.map(hit => (
            <li key={hit.id}>
              <Link
                to={{
                  pathname: `${url}/${hit.id}`,
                  state: { from: location },
                }}
              >
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
