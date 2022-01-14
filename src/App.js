import './App.css';
import AllMoviesPage from "./Pages/AllMovies/AllMoviesPage";
import {useState} from "react";
import {movieList} from "./ExternalData";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EditMoviesPage from "./Pages/EditMovies/EditMoviesPage";

const App = () => {
    const [allMovies, setAllMovies] = useState([...movieList]); // Global state that will only be changed when movieList is requested from backend

    return (<Router>
        <Routes>
            <Route path={"/"} element={<AllMoviesPage allMovies={allMovies}/>}/>
            <Route path={"/edit/:movieId"} element={<EditMoviesPage allMovies={allMovies} setAllMovies={setAllMovies}/>}/>
        </Routes>
    </Router>);
}

export default App;
