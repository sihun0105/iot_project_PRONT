import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:2005');
        setMovies(response.data.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  return (
    <div style={{ backgroundColor: '#9687ed', padding: '20px' }}>
      <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '30px', fontSize: '36px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Movie List</h1>
      {selectedMovie ? (
        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ color: '#9687ed', fontSize: '28px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>{selectedMovie.title}</h2>
          <button onClick={handleBackClick} style={{ marginBottom: '10px' }}>Back</button>
          <p style={{ color: '#555', fontWeight: 'bold', fontSize: '18px', textTransform: 'uppercase' }}>총 관객수: {selectedMovie.audience}</p>
          <hr />
          <h3>댓글 달기</h3>
          {/* 댓글 작성 폼 등을 구현하시면 됩니다 */}
        </div>
      ) : (
        movies?.map(movie => (
          <div
            key={movie.movieCd}
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '20px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => handleMovieClick(movie)}
          >
            <h2 style={{ color: '#9687ed', fontSize: '28px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>{movie.title}</h2>
            <p style={{ color: '#555', fontWeight: 'bold', fontSize: '18px', textTransform: 'uppercase' }}>총 관객수: {movie.audience}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
