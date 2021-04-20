
import axios from 'axios';
import { Dispatch } from 'redux';
import MovieProps from '../Movie/MovieProps';


export interface MovieReduce {
    movies: MovieProps[],
    isLoading: boolean,
}

export interface MovieAction {
    type: string,
    payload: MovieReduce,
}

export const FETCH_MOVIES_DATA_SUCCESS: string = 'SUCCESS_FETCH_MOVIES_DATA';

export const fetchMoviesData = () => async (dispatch: Dispatch<MovieAction>) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    
    dispatch({
        type: FETCH_MOVIES_DATA_SUCCESS,
        payload: {
            movies: movies,
            isLoading: true,
        },
    });

}