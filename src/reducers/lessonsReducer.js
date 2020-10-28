import {
    DELETE_LESSON,
    CREATE_LESSON,
    EDIT_LESSON
} from "../actions/lessonsActions";

const initialState = {
    lessons: [],
    lesson: {},
    moduleId: ""
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_LESSON_BY_ID":
            return {
                ...state,
                lesson: action.lesson
            }
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons,
                moduleId: action.moduleId
            }
        case CREATE_LESSON:
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ],
                moduleId: action.moduleId
            }
        case DELETE_LESSON:
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.lesson._id)
            }
        case EDIT_LESSON:
            return {
                ...state,
                lessons: state.lessons.map(lesson => lesson._id === action.lesson._id? action.lesson : lesson)
            }
        default:
            return state
    }
}

export default lessonReducer