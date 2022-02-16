import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
// import HomePage from './page/HomePage';
// import MovieDetailsPage from './page/MovieDetailsPage';
// import MoviesPage from 'page/MoviesPage';

const HomePage = lazy(() =>
  import('./page/HomePage' /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import('./page/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */)
);

const MoviesPage = lazy(() =>
  import('./page/MoviesPage' /* webpackChunkName: " movies-page" */)
);

export const App = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
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
          <Route path="/not-found">
            <h1>Not found</h1>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};
