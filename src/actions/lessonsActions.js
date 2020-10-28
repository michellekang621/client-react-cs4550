import LessonService from "../services/LessonService";
export const DELETE_LESSON = "DELETE_LESSON"
export const CREATE_LESSON = "CREATE_LESSON"
export const EDIT_LESSON = "EDIT_LESSON"

export const createLesson = (dispatch, moduleId, lesson) => {
    console.log("ACTION MODULE STATUS")
    console.log(moduleId)
    LessonService.createLessonForModule(moduleId, lesson)
        .then(actualLesson => dispatch({
            type: CREATE_LESSON,
            lesson: actualLesson
        }))}

export const deleteLesson = (dispatch, lesson) =>
    LessonService.deleteLesson(lesson._id)
        .then(status => dispatch({
        type: DELETE_LESSON,
        lesson: lesson
    }))


export const editLesson = (dispatch, lesson) =>
    LessonService.updateLesson(lesson._id, lesson)
        .then(status => dispatch({
            type: EDIT_LESSON,
            lesson: lesson
    }))