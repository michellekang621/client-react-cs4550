export const DELETE_LESSON = "DELETE_LESSON"
export const CREATE_LESSON = "CREATE_LESSON"
export const EDIT_LESSON = "EDIT_LESSON"

export const deleteLesson = (dispatch, lesson) =>
    dispatch({
        type: DELETE_LESSON,
        lesson: lesson
    })

export const createLesson = (dispatch) =>
    dispatch({
        type: CREATE_LESSON
    })

export const editLesson = (dispatch, lesson) =>
    dispatch({
        type: EDIT_LESSON,
        lesson: lesson
    })