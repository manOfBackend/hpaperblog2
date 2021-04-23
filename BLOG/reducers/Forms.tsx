import { FormReduce, FormAction, FETCH_FORMS_DATA_SUCCESS } from '../actions/FormAction';

export const initialState: FormReduce = {
    title: {
        message: '',
        str: '',
        setStr: () => { },
        title: '',
    },
    footer: {
        contact: '',
        copyright: '',
        message: '',
    },
    learnings: [{
        detail: '',
        format: '',
        href: '',
        imgSrc: '',
        title: '',
        type: '',
    }],
    menus: [{
        className: '',
        href: '',
        name: '',
    }],
    skills: [{
        iconValue: '',
        name: '',
        usage: '',
    }],
    posts: [{
        imgSrc: '',
        href: '',
        type: '',
        format: '',
        title: '',
        detail: '',
    }],
    isLoading: false,
}


const reducer = (state: FormReduce = initialState, action: FormAction): FormReduce => {
    console.log('reducer', action);
    
    switch (action.type) {
        case FETCH_FORMS_DATA_SUCCESS:

            return {
                ...state,
                title: action.payload.title,
                footer: action.payload.footer,
                learnings: [
                    ...action.payload.learnings
                ],
                menus: [
                    ...action.payload.menus
                ],
                skills: [
                    ...action.payload.skills
                ],
                posts: [
                    ...action.payload.posts
                ],
                isLoading: true,
            }
        default:
            
            return {
                ...state,
            }

    }
};


export default reducer;