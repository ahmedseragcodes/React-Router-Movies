import React, { useState } from 'react';
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Link, Route, useParams } from "react-router-dom";
import MovieCard from "./MovieCard"


export default function MovieList(props) {
  
  const params=useParams();
  
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
    <h2>{title}</h2>
    <div className="movie-director">
      Director: <em>{director}</em>
    </div>
    <div className="movie-metascore">
      Metascore: <strong>{metascore}</strong>
    </div>
  </div>
  );
  
}
