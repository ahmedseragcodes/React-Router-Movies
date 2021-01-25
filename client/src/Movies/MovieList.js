import React from 'react';
import MovieCard from "./MovieCard";
import { BrowserRouter as Router, Route, Link, Switch, useParams } from 'react-router-dom';
import Movie from "./Movie";



export default function MovieList(props) {

  const params=useParams();
  const movies=props;
  


  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {

  const { title, director, metascore, id } = props.movie;

  return (
    <div className="movie-card" >
      <Link to={`/movies/${id}`}>
      <h2>{title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
