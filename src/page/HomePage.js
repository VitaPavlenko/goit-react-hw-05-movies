import * as api from '../services/api';
import { useState, useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

export default function HomePage() {
  const [films, setFilms] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    api.fetchTrending().then(setFilms);
  }, []);

  return (
    <>
      <h2>Trending today</h2>

      {films && (
        <ul>
          {films.results.map(film => (
            <li key={film.id}>
              <NavLink to={`${url}movies/${film.id} `}>
                {film.title} {film.original_name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
