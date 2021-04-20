import { FETCH_MOVIES_DATA_SUCCESS, MovieAction, MovieReduce } from "../actions/MovieAction";

export const initialState: MovieReduce = {
    movies: [],
    isLoading: true,
}


const reducer = (state: MovieReduce = initialState, action: MovieAction): MovieReduce => {
    console.log('movies', action.payload, action.type);
    
    switch (action.type) {
        case FETCH_MOVIES_DATA_SUCCESS:
            return {
                ...state,
                movies: action.payload.movies,
                isLoading: false,
            }
        default:
            return {
                ...state,
            }

    }
};


export default reducer;