import { useState, useEffect } from 'react';
import axios from 'axios';
import { Div, StyledLink, Li, H1 } from './Home.styled.js';
import PropTypes from 'prop-types';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // URL actualizat cu cheia API direct în parametru
                const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=b3fe8ad645f337f3fa9ceb8e5b164aa5`;

                const response = await axios.get(url);
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
