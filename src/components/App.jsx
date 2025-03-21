import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container, Header, StyledLink } from './App.styled.js';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() =>
  import('./MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

const App = () => {
  return (
    <Container>
      <Header>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Header>
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
