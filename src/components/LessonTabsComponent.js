import React from "react";
import {connect} from "react-redux";
import {
    deleteLesson,
    createLesson,
    editLesson
} from "../actions/lessonsActions";
import {Link} from "react-router-dom";

const LessonTabsComponent = ({course, moduleId, lessons = [], deleteLesson, createLesson, editLesson}) =>
    <div>
        {console.log("INSIDE LESSON COMPONENT COURSE " + course._id)}
        {console.log("INSIDE LESSON COMPONENT " + moduleId)}
        <h1>Lessons</h1>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson=>
                    <li key={lesson._id} className="nav-item">

                    {
                        !lesson.editing &&
                        <span>
                            <label>
                            <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}>
                                {lesson.title}
                            </Link>
                            </label>
                            <i onClick={() => editLesson({...lesson, editing: true})}
                               className="fa fa-edit float-right pad-element element-color"/>
                        </span>
                    }
                    {
                        lesson.editing &&
                            <span>
                                <input onChange={(event) =>
                                    editLesson({...lesson, title: event.target.value})}
                                value={lesson.title}/>
                                <i onClick={() => editLesson({...lesson, editing: false})}
                                   className="fa fa-check-square float-right pad-element element-color"/>
                                <i onClick={() => deleteLesson(lesson)}
                                   className="fa fa-trash float-right pad-element element-color"/>
                            </span>
                    }
                    </li>
                )
            }
            <i onClick={() => createLesson(moduleId, {title: "New Lesson"})} className="fa fa-plus-square"/>
        </ul>
    </div>

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
    createLesson: (moduleId, lesson) => createLesson(dispatch, moduleId, lesson),
    editLesson: (lesson) => editLesson(dispatch, lesson)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(LessonTabsComponent)