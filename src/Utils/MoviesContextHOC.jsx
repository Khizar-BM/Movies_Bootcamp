import React, {useContext} from 'react';
import {AllMoviesContext} from "../Context/AllMoviesStore";

const MoviesContextHoc = Component => props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {allMovies, dispatch} = useContext(AllMoviesContext)
    const newProps = {
        allMovies,
        dispatch,
        ...props
    }
    return (<Component {...newProps}/>)


}
export default MoviesContextHoc;