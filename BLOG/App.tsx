import React, { useState, useEffect, useCallback } from 'react';
import Menu from './Menu/MenuClass';
import Title from './Title/TitleClass';
import Skill from './Skill/SkillClass';
import Post from './Post/PostClass';
import Learning from './Learning/LearningClass';
import Footer from './footer/FooterClass';
import Movie from './Movie/MovieClass';
import MovieProps from './Movie/MovieProps';
import SkillProps from './Skill/SkillProps';
import LearningProps from './Learning/LearningProps';
import PostProps from './Post/PostsProps';
import MenuProps from './Menu/MenuProps';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchFormsData } from './actions/FormAction';

const App = () => {

    const [footerMessage, setFooterMessage] = useState<string>('');

    const [contact, setContact] = useState<string>('');

    const [copyright, setCopyright] = useState<string>('');

    const [learningPosts, setLearningPosts] = useState<LearningProps[]>([]);

    const [posts, setPosts] = useState<PostProps[]>([]);
    const [menus, setMenus] = useState<MenuProps[]>([]);

    const [skills, setSkills] = useState<SkillProps[]>([]);

    const [title, setTitle] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [str, setStr] = useState<string>("");

    const getMovies = async (): Promise<void> => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json");

        setMovies(movies);
        setIsLoading(false);
    }


    const dispatch = useDispatch();

    const getForms = () => {
        dispatch(fetchFormsData());

    }
    // const getForms = async (): Promise<void> => {
    //     const {
    //         data: { menus, skills, posts, learning, title,
    //             message, footerMessage, contact, copyright }
    //     } = await axios.get("http://127.0.0.1:5000/forms");
 

    //     // setMenus(menus);
    //     // setSkills(skills);
    //     // setPosts(posts);
    //     // setLearningPosts(learning);
    //     // setTitle(title);
    //     // setMessage(message);
    //     // setFooterMessage(footerMessage);
    //     // setContact(contact);
    //     // setCopyright(copyright);

    // }


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

            <Movie movies={movies} isLoading={isLoading} />

            <Footer />

            <a id="backtotop"></a>
        </>
    );
}

export default App;
