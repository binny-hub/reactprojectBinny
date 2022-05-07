import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ComingSoon from './ComingSoon';
import RunningMovies from './MoviesInTheatre';
import NavigationMenu from './NavigationMenu';
import SearchMovie from './Search';
import TopRated from './TopRatedMovies';
import TopRatedIndia from './IndianTopRated';
import './component/app.css'
import Home from './Home';

const App = () => {
    return (
        <>
            <NavigationMenu />
            <Routes>


                <Route path='' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/moviesintheaters' element={<RunningMovies/>}></Route>
                <Route path='/moviescoming' element={<ComingSoon />}></Route>
                <Route path='/topratedindia' element={<TopRatedIndia />}></Route>
                <Route path='/topratedmovies' element={<TopRated />}></Route>
                <Route path='/search' element={<SearchMovie />}></Route>

            </Routes>
        </>
    );
};

export default App;