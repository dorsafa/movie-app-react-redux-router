import {ADD_MOVIE_CARD,REMOVE_MOVIE_CARD,EDIT_CARD} from './actionType'

export const addMovieCard = (newMovie) => (
    {type:ADD_MOVIE_CARD,payload:newMovie}
)

export const removeMovieCard = (id) => (
    {type:REMOVE_MOVIE_CARD, payload:id}
)

export const editCard = (id, editedMovie) =>(
    {type:EDIT_CARD, payload:{id, editedMovie}}
)