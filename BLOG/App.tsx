import React, { useState, useEffect, useCallback } from 'react';
import Menu from './Menu/MenuClass';
import Title from './Title/TitleClass';
import Skill from './Skill/SkillClass';
import Post from './Post/PostClass';
import Learning from './Learning/LearningClass';
import Footer from './footer/FooterClass';
import Movie from './Movie/MovieClass';
import { useDispatch } from 'react-redux';
import { fetchFormsData } from './actions/FormAction';
import { fetchMoviesData } from './actions/MovieAction';

const App = () => {

    const dispatch = useDispatch();

    const getForms = () => {
        dispatch(fetchFormsData());

    }

    const getMovies = () => {
        dispatch(fetchMoviesData());
    }

    useEffect(() => {
        getForms();
        getMovies();
    }, []);


    return (
        <>
            <Menu />

            <Title />

            <Skill/>

            <Post />

            <Learning />

            <Movie />

            <Footer />

            <a id="backtotop"></a>
        </>
    );
}

export default App;
