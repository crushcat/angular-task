import { COURSE_ACTIONS } from './constants';
import { Actions } from './actions';

const defaultState = {
    courses: [],
    error: '',
};

export function CourseReducer(state = defaultState, action: Actions) {
    switch (action.type) {
        case COURSE_ACTIONS.STORE_COURSES:
            return {
                ...state,
                courses: action.payload.courses,
            };
        case COURSE_ACTIONS.STORE_COURSE:
            return {
                ...state,
                course: action.payload.course,
            };
        case COURSE_ACTIONS.STORE_AUTHORS:
            return {
                ...state,
                authors: action.payload.authors,
            };
        case COURSE_ACTIONS.FAILED_LOAD:
            return {
                ...state,
                error: '',
            };
        default:
            return state;
    }
}