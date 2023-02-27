import { Route, Routes } from "react-router-dom";
import { lazy } from 'react'
import {SharedLayout } from './SharedLayout/SharedLayout'


const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


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
