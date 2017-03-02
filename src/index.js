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
        <div key={movie.imdbID}>
          <img src={movie.Poster}/>
          <h1>{movie.Title}</h1>
          <p>{movie.Year}</p>
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

        //if loading -run preloader component
        //if not loading - render movie component


fetch('http://www.omdbapi.com/?s=Star%20Wars&plot=short&r=json')
    .then(res => res.json())
    .then(movies => {
      console.log('movies.search', movies.Search);
      return movies.Search;
    })
    .then(movies => {
      ReactDOM.render(
        <App loading={false} movies={movies}/>,
        document.getElementById('root')
      );
    })
    .catch();
