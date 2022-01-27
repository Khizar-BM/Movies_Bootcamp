import React, {useState} from 'react';
import FilterOption from "../filter/FilterOption/FilterOption";
import TextField from '@mui/material/TextField';
import {genreList, yearList} from "../../ExternalData";
import {
    BtnContainer,
    InputContainer,
    MultiInputContainer, RatingContainer,
    StyledForm,
    StyledLabel
} from "./MovieForm.style";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

const MovieForm = ({movie, onFormSubmit, setMovie, btnText}) => {
    const [filters, setFilters] = useState({genreList: genreList, yearList: yearList});

    const onFormChange = (e) => setMovie({...movie, [e.target.name]: e.target.value})


    const onRatingChange = (e, rating) => setMovie({...movie, rating: parseFloat(rating.toFixed(1))})

    return (<StyledForm action="" onSubmit={onFormSubmit}>

            <InputContainer>
                <StyledLabel htmlFor="rating"><b>Movie Name:</b> </StyledLabel>
                <TextField variant="standard" placeholder="Enter movie name here..." type="text" name="name" id="name"
                           value={movie.name}
                           onChange={onFormChange} required fullWidth/>
            </InputContainer>


            <MultiInputContainer>
                <FilterOption title='Genre' filterName='genre' filterList={filters.genreList} filterState={movie.genre}
                              setFilterState={onFormChange}/>

                <FilterOption title='Year' filterName='release_year' filterList={filters.yearList}
                              filterState={movie.release_year} setFilterState={onFormChange}/>
            </MultiInputContainer>

            <RatingContainer>
                <StyledLabel htmlFor="rating"><b>Rating:</b> </StyledLabel>
                <Rating name="rating" value={movie.rating} precision={0.1} max={10}
                        size="large"
                        onChange={onRatingChange}/>
            </RatingContainer>
            <BtnContainer>
                <Button variant="contained" color="success" type="submit">{btnText}</Button>
            </BtnContainer>

        </StyledForm>
    );
}

export default MovieForm;