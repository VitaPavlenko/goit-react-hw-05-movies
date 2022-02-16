import { Switch, Route, useRouteMatch } from 'react-router-dom';
import HomePage from './page/HomePage';
import Navigation from 'components/Navigation/Navigation';
import MovieDetailsPage from './page/MovieDetailsPage';
import MoviesPage from 'page/MoviesPage';

export const App = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path={`${path}movies/:moviesId`}>
          <MovieDetailsPage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </>
  );
};
