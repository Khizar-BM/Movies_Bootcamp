import React, {useState} from 'react';
import FilterOption from "../filter/FilterOption/FilterOption";
import {genreList, yearList} from "../../ExternalData";
import {
    BtnContainer,
    FormBtn,
    InputContainer,
    MultiInputContainer,
    StyledForm,
    StyledInput,
    StyledLabel
} from "./MovieForm.style";

const MovieForm = ({movie, onFormSubmit, setMovie, btnText}) => {
    const [filters, setFilters] = useState({genreList: genreList, yearList: yearList});

    const onFormChange = (e) => {
        if (!isNaN(e.target.value) && e.target.name === "rating")
            setMovie({...movie, [e.target.name]: parseFloat(parseFloat(e.target.value).toFixed(1))})
        else
            setMovie({...movie, [e.target.name]: e.target.value})

    }
    return (<StyledForm action="" onSubmit={onFormSubmit}>

            <InputContainer>
                <StyledLabel htmlFor="name"><b>Movie Title:</b> </StyledLabel>
                <StyledInput type="text" placeholder="Enter movie title" name="name" id="name" value={movie.name}
                             onChange={onFormChange} required/>
            </InputContainer>

            <InputContainer>
                <StyledLabel htmlFor="rating"><b>Rating:</b> </StyledLabel>
                <StyledInput type="number" placeholder="Enter movie rating" name="rating" id="email" max={10} min={1}
                             step={0.1}
                             value={isNaN(movie.rating) ? "" : movie.rating} onChange={onFormChange} required/>
            </InputContainer>

            <MultiInputContainer>
                <FilterOption title='Genre' filterName='genre' filterList={filters.genreList} filterState={movie.genre}
                              setFilterState={onFormChange}/>

                <FilterOption title='Year' filterName='release_year' filterList={filters.yearList}
                              filterState={movie.release_year} setFilterState={onFormChange}/>
            </MultiInputContainer>

            <BtnContainer>
                <FormBtn>{btnText}</FormBtn>
            </BtnContainer>

        </StyledForm>
    );
}

export default MovieForm;