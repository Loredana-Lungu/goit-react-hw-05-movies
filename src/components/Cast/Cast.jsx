import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { H2 } from './Cast.styled.js';
import axios from 'axios';
import PropTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        // Include cheia API direct în URL
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=b3fe8ad645f337f3fa9ceb8e5b164aa5`;

        const response = await axios.get(url);
        setCast(response.data.cast);
        setError(false);
      } catch (error) {
        console.error("Error fetching cast information:", error);
        setError(true);
      }
    };

    fetchCast();
  }, [movieId]);


  if (error) {
    return <div>Error loading cast information. Please try again later.</div>;
  }

  if (!cast || cast.length === 0) {
    return <div>No cast information available for this movie.</div>;
  }

  return (
    <div>
      <H2>Cast</H2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <p><strong>{actor.name}</strong> as {actor.character || 'Unknown Character'}</p>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};

export default Cast;
