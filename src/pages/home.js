import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [comment, setComment] = useState('');

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

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    const postData = {
      movieCd: selectedMovie.movieCd,
      content: comment,
      userno: 1, // 유저번호를 수정해주세요
    };

    axios.post('http://localhost:2005/comments', postData)
      .then(response => {
        // 댓글 작성 성공 시 처리할 코드를 작성해주세요
      })
      .catch(error => {
        console.error('Error posting comment:', error);
      });

    // 댓글 작성 후 필요한 처리를 추가해주세요
    // 예를 들어, 작성한 댓글을 화면에 표시하거나 댓글 목록을 업데이트할 수 있습니다
  };

  return (
    <div style={{ backgroundColor: '#9687ed', padding: '20px' }}>
      <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '30px', fontSize: '36px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Movie List</h1>
      {selectedMovie ? (
        <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ color: '#9687ed', fontSize: '28px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>{selectedMovie.title}</h2>
          <button onClick={handleBackClick} style={{ marginBottom: '10px', backgroundColor: '#9687ed', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Back</button>
          <p style={{ color: '#555', fontWeight: 'bold', fontSize: '18px', textTransform: 'uppercase' }}>총 관객수: {selectedMovie.audience}</p>
          <hr />
          <h3>댓글 달기</h3>
          <form>
            <textarea value={comment} onChange={handleCommentChange} style={{ width: '100%', minHeight: '100px', marginBottom: '10px' }} placeholder="댓글을 작성하세요" />
            <button type="button" onClick={handleCommentSubmit} style={{ backgroundColor: '#9687ed', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>댓글 작성</button>
          </form>
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
