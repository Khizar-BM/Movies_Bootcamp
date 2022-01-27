import './App.css';
import AllMoviesPage from "./Pages/AllMovies/AllMoviesPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EditMoviesPage from "./Pages/EditMovies/EditMoviesPage";
import AddMoviesPage from "./Pages/AddMovies/AddMoviesPage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

    return (<Router>
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<AllMoviesPage/>}/>
            <Route path={"/edit/:movieId"} element={<EditMoviesPage/>}/>
            <Route path={"/add"} element={<AddMoviesPage/>}/>
        </Routes>
    </Router>);
}

export default App;
