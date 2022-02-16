import { Route, useRouteMatch } from 'react-router-dom';
import HomePage from './page/HomePage';
import Navigation from 'components/Navigation/Navigation';
import MovieDetailsPage from './page/MovieDetailsPage';

export const App = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Navigation />

      <Route path="/" exact>
        <HomePage />
      </Route>

      {/* <Route path="/movies">
        <MoviesPage />
      </Route> */}

      <Route path={`${path}movies/:moviesId`} exact>
        <MovieDetailsPage />
      </Route>
    </>
  );
};
