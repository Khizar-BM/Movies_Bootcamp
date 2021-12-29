import './App.css';
import TableComponent from "./components/TableComponent";

const movies = [{
    id: 1,
    name: "Avengers Endgame",
    genre: "Action",
    rating: 7.8,
    release_year: "2019"
}, {
    id: 2,
    name: "Avengers",
    genre: "Action",
    rating: 8,
    release_year: "2012"
}, {
    id: 3,
    name: "Spider-man No Way Home",
    genre: "Sci-Fi",
    rating: 9.2,
    release_year: "2021"
}, {
    id: 4,
    name: "Don't look up",
    genre: "Drama",
    rating: 7.4,
    release_year: "2021"
}, {
    id: 5,
    name: "Red Notice",
    genre: "Thriller",
    rating: 6,
    release_year: "2018"
}, {
    id: 6,
    name: "Jungle Cruise",
    genre: "Adventure",
    rating: 6.4,
    release_year: "2020"
}, {
    id: 7,
    name: "Dracula",
    genre: "Thriller",
    rating: 7,
    release_year: "2016"
}, {
    id: 8,
    name: "The Amazing Spider-man",
    genre: "Sci-Fi",
    rating: 6.8,
    release_year: "2012"
}, {
    id: 9,
    name: "IT",
    genre: "Horror",
    rating: 7.9,
    release_year: "2016"
}, {
    id: 10,
    name: "The Dark Knight",
    genre: "Action",
    rating: 9,
    release_year: "2008"
}]

function App() {
    return (
        <div className='container'>
            <h1 className='title'>Movies</h1>
            <TableComponent movies={movies}/>
        </div>
    );
}

export default App;
