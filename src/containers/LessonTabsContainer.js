import React from "react";

export const LessonTabs = ({lessons, selectedLesson, selectLesson}) =>
    <ul className="nav nav-tabs">
        <p>HELLO</p>

        {   lessons.map((lesson, key) =>
            <li className="nav-item"
                onClick={() => selectLesson(lesson)}
                key={key}>
                <a className={lesson===selectedLesson? "nav-link active":"nav-link"}>
                    {lesson.title}
                </a>
            </li>
        )}
    </ul>

export default {
    LessonTabs
}