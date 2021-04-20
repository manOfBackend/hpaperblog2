
import PostProps from '../Post/PostsProps';
import SkillProps from '../Skill/SkillProps';
import LearningProps from '../Learning/LearningProps';
import MenuProps from '../Menu/MenuProps';
import axios from 'axios';
import TitleProps from '../Title/TitleProps';
import FooterProps from '../footer/FooterProps';
import { Dispatch } from 'redux';


export interface FormReduce {
    menus: MenuProps[],
    skills: SkillProps[],
    learnings: LearningProps[],
    title: TitleProps,
    footer: FooterProps,
    posts: PostProps[],
    isLoading: boolean,
}

export interface FormAction {
    type: string,
    payload: FormReduce,
}

export const FETCH_FORMS_DATA_SUCCESS: string = 'GET_FORMS';


export const fetchFormsData = () => async (dispatch: Dispatch<FormAction>) => {
    const {
        data: { menus, skills, posts, learning, title,
            message, footerMessage, contact, copyright }
    } = await axios.get("http://127.0.0.1:5000/forms");

    console.log(posts);
    
    dispatch({
        type: FETCH_FORMS_DATA_SUCCESS,
        payload: {
            menus: menus,
            skills: skills,
            posts: posts,
            learnings: learning,
            title: {
                title: title,
                message: message,
                setStr: () => { },
                str: '',
            },
            footer: {
                contact: contact,
                copyright: copyright,
                message: footerMessage,
            },
            isLoading: true,
        },
    });

}