import { useState, useEffect } from 'react';
import axios from 'axios';
import { Div, StyledLink, Li, H1 } from './Home.styled.js';
import PropTypes from 'prop-types';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
               const response = await axios.get(
              'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
              {
                headers: {
                  Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
                  Accept: 'application/json',
                }
              }
              );
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching movies: ", error);
            }
        }

        fetchMovies();
    }, []);

    return (
      <Div>
        <H1>Trending today</H1>
        <ul>
          {movies.map(movie => (
            <Li key={movie.id}>
                <StyledLink to={`/movies/${movie.id}`}>
                    {movie.title || movie.name}
                </StyledLink>
            </Li>
          ))}
        </ul>
      </Div>
    );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string
    })
  )
};

export default Home;