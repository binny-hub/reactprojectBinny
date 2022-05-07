import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import Home from './Home';
import NavigationMenu from './component/NavigationMenu';
import ComingSoon from './component/ComingSoon'
import TopRated from './component/TopratedMovies';
import './app.css';
import SearchMovie from './component/Search';
import RunningMovies from './component/MoviesInTheatre';
import TopRatedIndia from './component/IndianTopRated';


const App = () => {
    return (
        <>
            <NavigationMenu />
            <Routes>


                {/* <Route path='' element={}></Route> */}
                {/* <Route path='/home' element={}></Route> */}
                <Route path='/moviesintheaters' element={<RunningMovies />}></Route>
                <Route path='/moviescoming' element={<ComingSoon />}></Route>
                <Route path='/topratedindia' element={<TopRatedIndia />}></Route>
                <Route path='/topratedmovies' element={<TopRated />}></Route>
                <Route path='/search' element={<SearchMovie />}></Route>

            </Routes>
        </>
    );
};

export default App;