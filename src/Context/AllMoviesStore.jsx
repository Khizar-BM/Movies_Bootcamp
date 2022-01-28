import React, {createContext, useContext, useReducer} from 'react';

export const AllMoviesContext = createContext({})

export const MoviesContextHoc = Component => props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {allMovies, dispatch} = useContext(AllMoviesContext)
    const newProps = {
        allMovies,
        dispatch,
        ...props
    }
    return (<Component {...newProps}/>)
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {...action.movie, id: state.length + 1}]
        case "EDIT":
            return state.map(movieItem => (movieItem.id === action.movie.id ? action.movie : movieItem))
        case "LOAD-MOVIES":
            return [...action.movies]
        default:
            return state

    }
}
const initialState =[]

const AllMoviesStore = (props) => {
    const [allMovies, dispatch] = useReducer(reducer, initialState);

    return (<AllMoviesContext.Provider value={{allMovies, dispatch}}>
        {props.children}
    </AllMoviesContext.Provider>)

}

export default AllMoviesStore;