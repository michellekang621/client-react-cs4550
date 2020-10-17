import React from "react";
import {connect} from "react-redux";
import {
    deleteLesson,
    createLesson,
    editLesson
} from "../actions/lessonsActions";

const LessonTabsComponent = ({lessons = [], deleteLesson, createLesson, editLesson}) =>
    <div>
        <h1>Lessons</h1>
        <span>
            {
                lessons.map(lesson=>
                    <span>
                    {
                        !lesson.editing &&
                        <span>
                            <label>
                                {lesson.title}
                            </label>
                            <button onClick={() =>
                                editLesson({...lesson, editing: true})}>
                                Edit
                            </button>
                        </span>
                    }
                    {
                        lesson.editing &&
                            <span>
                                <input onChange={(event) =>
                                    editLesson({...lesson, title: event.target.value})}
                                value={lesson.title}/>
                                <button onClick={() =>
                                    editLesson({... lesson, editing: false})}>
                                    Ok
                                </button>
                                <button onClick={() =>
                                    deleteLesson(lesson)}>
                                    Delete
                                </button>
                            </span>
                    }
                    </span>
                )
            }
            <button onClick={createLesson}>
                Create Lesson
            </button>
        </span>
    </div>

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
    createLesson: () => createLesson(dispatch),
    editLesson: (lesson) => editLesson(dispatch, lesson)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(LessonTabsComponent)