import React, {createContext, useReducer} from 'react';
import {movieList} from "../ExternalData";

export const AllMoviesContext = createContext({})

const AllMoviesStore = (props) => {
    const [allMovies, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "ADD":
                return [...state, {...action.movie, id: state.length + 1}]
            case "EDIT":
                return state.map(movieItem => (movieItem.id === action.movie.id ? action.movie : movieItem))
            default:
                return state

        }
    }, [...movieList]);

    return (<AllMoviesContext.Provider value={{allMovies, dispatch}}>
        {props.children}
    </AllMoviesContext.Provider>)

}

export default AllMoviesStore;