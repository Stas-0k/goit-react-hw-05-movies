import { Route, Routes } from "react-router-dom";
import { SharedLayout } from './SharedLayout/SharedLayout';
//import { lazy } from 'react'
import { Home } from '../pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';




export const App = () => {
  
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
         <Route index element={<Home />} />
        <Route path='/goit-react-hw-05-movies/movies' element={<Movies />} />
        <Route path='/goit-react-hw-05-movies/movies/:id' element={<MovieDetails />} >
          <Route path='/goit-react-hw-05-movies/movies/:id/cast' element={<Cast />} /> 
          <Route path='/goit-react-hw-05-movies/movies/:id/reviews' element={<Reviews />} /> 
          </Route>
        </Route>
    </Routes>
  );
};
