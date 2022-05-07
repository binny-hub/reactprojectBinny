import { useEffect, useState } from "react"
import DisplayMovies from "../component/common/DisplayMovies"
import IMovies from "../model/iMovies"
import { TopRatedMovies } from "../services/TopratedMovies"


const TopRated= () => {
    const [moviesList, setMoviesList] = useState<IMovies[]>([])
    useEffect(
        () => {
            const fetchList = async () => {
                TopRatedMovies()
                    .then(data => setMoviesList(data))
                    .catch(error=> alert(error.message))                }

            fetchList()
        }, []
    )
    return (
      <DisplayMovies moviesList={moviesList}/>
    );
}

export default TopRated;