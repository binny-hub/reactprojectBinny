import { useEffect, useState } from "react"
import IMovies from "../model/iMovies"
//import DisplayMovies from "../common/DisplayMovies"
import { UpcomingMovie } from "../services/comingSoon"
import DisplayMovies from "../component/common/DisplayMovies"

const ComingSoon = () => {
    const [moviesList, setMoviesList] = useState<IMovies[]>([])
    useEffect(
        () => {
            const fetchList = async () => {
                UpcomingMovie()
                    .then(data => setMoviesList(data))
                    .catch(error=> alert(error.message))                }

            fetchList()
        }, []
    )
    return (
      <DisplayMovies moviesList={moviesList}/>
    );
}

export default ComingSoon;