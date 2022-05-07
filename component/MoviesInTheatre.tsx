import React from "react";
import { useEffect, useState } from "react";
//import DisplayMovies from "../common/DisplayMovies";
import IMovies from "../model/iMovies";
import { moviesInTheater } from "../services/MoviesInTheatre";
import DisplayMovies from "../component/common/DisplayMovies"

const RunningMovies = () => {
    const [moviesList, setMoviesList] = useState<IMovies[]>([])
    useEffect(
        () => {
            const fetchList = async () => {
                moviesInTheater()
                    .then(data => setMoviesList(data))
                    .catch(error=> alert(error.message))                }

            fetchList()
        }, []
    )
    return (
      <DisplayMovies moviesList={moviesList}/>
    );
}

export default RunningMovies;