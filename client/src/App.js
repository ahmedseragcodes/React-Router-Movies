import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          const movies=response.data;
          setMovieList(movies);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    movieList.map(function(item){
      return id===item.id ? item.id  : setSaved(item.id)
    })

  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
          <Router>
      <Route exact path="/">
      <MovieList movies={movieList} />
      </Route>
      <Route path="/movies/:id">
      <Movie movie={movieList.map(function(item){
        return item;
      })}
      />
      </Route>
      </Router>
    </div>
  );
}
