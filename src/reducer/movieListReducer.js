import { ADD_MOVIE_CARD, REMOVE_MOVIE_CARD, EDIT_CARD } from "../action/actionType"
import { movieList } from '../data'

let initState = {
    movieList
}


const movieListReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MOVIE_CARD:
            return { movieList: [...state.movieList, action.payload] }

        case REMOVE_MOVIE_CARD:
            return { movieList: [...state.movieList.filter((el) => (el.id !== action.payload))] }

        case EDIT_CARD:
            return { movieList: [...state.movieList.map(el => el.id === action.payload.id ? { ...el, ...action.payload.editedMovie } : el)] }
        default: return state
    }

}

export default movieListReducer;