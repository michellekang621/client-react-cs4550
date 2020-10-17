import {
    DELETE_LESSON,
    CREATE_LESSON,
    EDIT_LESSON
} from "../actions/lessonsActions";

const initialState = {
    lessons: [
        {
            _id: 123,
            title: "Lesson 1",
            editing: false
        },
        {
            _id: 234,
            title: "Lesson 2",
            editing: false
        },
        {
            _id: 345,
            title: "Lesson 3",
            editing: true
        }
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    {
                        _id: Date.now() + "",
                        title: "New Lesson"
                    }
                ]
            }
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lesson._id)
            }
        case EDIT_LESSON:
            return {
                lessons: state.lessons.map(lesson => lesson._id === action.lesson._id? action.lesson : lesson)
            }
        default:
            return state
    }
}

export default lessonReducer