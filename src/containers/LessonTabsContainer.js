import React from "react";

const LessonTabs = ({lessons, selectedLesson, selectLesson}) =>
    <ul className="nav nav-tabs">
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