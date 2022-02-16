import { useParams, Link, Route, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from '../services/api';
import Cast from '../components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [films, setFilms] = useState(null);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    api.fetchMovieDetails(moviesId).then(setFilms);
  }, [moviesId]);

  // console.log(films);
  //   const { backdrop_path, original_title } = films;
  const imgUrl = 'https://image.tmdb.org/t/p/w400';

  return (
    <>
      <Link to="/">Go back</Link>
      <br />
      {films && (
        <>
          <img src={imgUrl + films.backdrop_path} alt={films.original_title} />
          <h2>{films.original_title}</h2>
          <p>User Score: {(films.vote_average * 100) / 10}%</p>
          <h3>overview</h3>
          <p>{films.overview}</p>
          <h3>Genres</h3>
          <ul>
            {films.genres.map(gen => (
              <li key={gen.id}>{gen.name}</li>
            ))}
          </ul>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to={`${url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${url}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;