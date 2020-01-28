import {createStore} from 'redux'
import movieListReducer from '../reducer/movieListReducer'



const store = createStore( movieListReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )

export default store;