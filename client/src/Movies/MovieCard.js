import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, useParams } from "react-router-dom";



export default function MovieCard(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card" onClick={
      <Route path="/movies/{props.movie.id}" />
    }>
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
