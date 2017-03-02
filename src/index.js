import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App(props) {
  if (props.loading) {
    return (
      <div>loading</div>
    );
  } else {
    let movArr = props.movies.map((movie, i) => {
      return (
        <div key={movie.imdbID} 
        style={{
          backgroundImage: `url(${movie.Poster})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'opacity(.5)'
        }}
        className='movie-box'>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} role='presentation'/>
          <h3>Released: {movie.Year}</h3>
        </div>
      );
    });
    return (
      <div>
        {movArr}
      </div>
    );
  }
};

ReactDOM.render(
  <App loading={true} movies/>,
  document.getElementById('root')
);

fetch('http://www.omdbapi.com/?s=Star%20Wars&plot=short&r=json')
    .then(res => res.json())
    .then(movies => {
      return movies.Search;
    })
    .then(movies => {
      ReactDOM.render(
        <App loading={false} movies={movies}/>,
        document.getElementById('root')
      );
    })
    .catch();
