import React from "react";
import {connect} from "react-redux";
import {
    deleteLesson,
    createLesson,
    editLesson
} from "../actions/lessonsActions";
import {Link} from "react-router-dom";

const LessonTabsComponent = ({module, lessons = [], deleteLesson, createLesson, editLesson}) =>
    <div>
        <h1>Lessons</h1>
        <span>
            {
                lessons.map(lesson=>
                    <span key={lesson._id}>
                    <Link to={`/edit/${module._id}/lessons/${lesson._id}`}>

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
                    </Link>
                    </span>
                )
            }
            <button onClick={() => createLesson(module._id, {title: "New Lesson"})}>
                Create Lesson
            </button>
        </span>
    </div>

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    module: state.moduleReducer.module
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
    createLesson: (module, lesson) => createLesson(dispatch, module, lesson),
    editLesson: (lesson) => editLesson(dispatch, lesson)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(LessonTabsComponent)