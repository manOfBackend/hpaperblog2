import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieProps from './MovieProps';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../reducers';

const Movie = (): JSX.Element => {

    const { isLoading, movies } = useSelector((state: RootReducerType) => state.Movies);

    console.log(isLoading, movies);
    
    return <>
        <section>
            <div className="inner">
                <div className="roadmap-container">
                    <div className="roadmap-title-container">
                        <div className="roadmap-title">추천하는 영화 <span className="roadmap-desc"></span></div>
                        <div className="arrow-container">
                            <i className="fas fa-chevron-circle-left slide-prev"></i>
                            <i className="fas fa-chevron-circle-right slide-next"></i>
                        </div>
                    </div>
                    <ul className="class-list" data-position="0">
                        {isLoading ? "Loading..."
                            : movies.map((movie: MovieProps) => {
                                return <li className="class-card" key={movie.poster + movie.title}>
                                    <img src={movie.medium_cover_image} alt="HyeonPaper Blog" className="class-image" />
                                    <a href={movie.poster} target="_blank">
                                        <div className="class-container">
                                            <div className="class-skill">
                                                <div className="class-type">{movie.type}</div>
                                                <div className="class-format">{movie.genre}</div>
                                            </div>
                                            <div className="class-desc">
                                                <div className="class-title">{movie.title}</div>
                                                <div className="class-detail">{movie.summary}</div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            })}
                    </ul>
                </div>
            </div>
        </section>
    </>

}

export default Movie;
