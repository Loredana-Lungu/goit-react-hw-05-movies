import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { StyledLink, Li, SearchInput, SearchButton } from './Movies.styled';

const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(false);
    const location = useLocation();
    const inputRef = useRef(null);

    useEffect(() => {
        if (location.state?.searchResults && location.state?.searchQuery) {
            console.log('Restoring state:', location.state);
            setSearchResults(location.state.searchResults);
            setSearchQuery(location.state.searchQuery);
        }
    }, [location.state]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSearchFilterSubmit = async event => {
        event.preventDefault();
        console.log('Submitting search query:', searchQuery);
    
        try {
            // URL actualizat cu cheia API direct în parametru
            const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1&api_key=b3fe8ad645f337f3fa9ceb8e5b164aa5`;
    
            const response = await axios.get(url);
            console.log('Fetched movies:', response.data.results);
            setSearchResults(response.data.results);
            setError(false);
        } catch (error) {
            console.error('Error fetching movies:', error);
            setError(true);
            setSearchResults([]);
        }
    };
    

    const handleSearchValueChange = event => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSearchFilterSubmit}>
                <SearchInput
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    placeholder="Search for a movie..."
                    onChange={handleSearchValueChange}
                />
                <SearchButton type="submit">Search</SearchButton>
            </form>
            {error && <div className="error-message">Error fetching movies. Please try again later.</div>}
            <ul>
                {searchResults.map(movie => (
                    <Li key={movie.id}>
                        <StyledLink 
                            to={`/movies/${movie.id}`}
                            state={{ from: "/movies", searchResults, searchQuery }}
                        >
                            {movie.title || movie.name}
                        </StyledLink>
                    </Li>
                ))}
            </ul>
        </div>
    );
};

Movies.propTypes = {
    searchQuery: PropTypes.string,
    searchResults: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            name: PropTypes.string
        })
    ),
    location: PropTypes.shape({
        state: PropTypes.shape({
            from: PropTypes.string,
            searchResults: PropTypes.array,
            searchQuery: PropTypes.string
        })
    }),
};

export default Movies;
