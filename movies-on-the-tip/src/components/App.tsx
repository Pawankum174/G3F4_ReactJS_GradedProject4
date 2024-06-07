import {useState,useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import MovieList from './MovieList';
import {NavigationMenu} from './NavigationMenu'
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import IMovie from '../models/IMovies';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import RouteList from './MoviePage';
import MoviePage from './MoviePage';


function App() {

  return (

    <>  
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick
     rtl={false} pauseOnFocusLoss draggable pauseOnHover />  
    <MoviePage />
  </>

  );
}

export default App;